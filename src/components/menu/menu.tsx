import React, { createContext, useState } from "react";

//属性
// interface MenuProps{
//     activeIndex: number;
//     mode: string;
//     onSelect: (selectedIndex:number)=>void
//     className: string
// }

import classNames from "classnames";

// interface MenuItemProps {
//     index: number;
//     disabled: boolean;
//     className: string;
// }
type MenuMode = 'horizontal'|'vertical'
export interface MenuProps{
    defaultIndex?:number;
    className?:string;
    mode?:MenuMode;
    style?: React.CSSProperties;
    onSelect?:(selectIndex:number)=>void;
    children: React.ReactNode
}

type SelectCallback = (selectedIndex:number) => void;

//父组件传值给子组件,父组件参数中有MenuProps组件,但这里只能看到children
//这里用context用于透传属性
interface IMenuContext {
    index:number;
    onSelect?:SelectCallback;
    mode?:MenuMode;
} 

export const MenuContext = createContext<IMenuContext>({index:0})


const Menu:RFC<MenuProps> = ({className,mode='horizontal',style,children,defaultIndex=0,onSelect}) =>{
    const [currentActive,setActive] = useState(defaultIndex)
    // const {className,mode,style,children,defaultIndex} = props
    const classes = classNames('viking-menu',className,{
        'menu-vertical': mode === 'vertical'
    })
    const handleClick = (index:number)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive?currentActive:0,
        onSelect: handleClick,
        mode: mode,
    }

    //直接忽略在menu中的除了menuitem之外的其他元素,加了也不生效,例如<Menu><MenuItem></MenuItem><li></li></Menu>,这里li不生效
    const renderChildren = () => {
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName}=childElement.type
            if(displayName === 'MenuItem'){
                // return childElement
                //用cloneElement方法来设置元素的index值,这样children也就是MenuItem就不需要显式声明index了,<MenuItem index={0}>这里index={0}去掉就行
                //因为这里不显式设置index,而是通过map遍历时children所处位置作为index.给组件设置了index并且不用显式操作
                return React.cloneElement(childElement,{
                    index
                })
            }else{
                console.log("warning: menu has a child which is not a menuitem component")
            }
        })
    }

    return (
        <ul className={classes} style={style}>
            {/* //本来应该是React.FC默认有的，不需要申明，但不知道为什么不能直接用 */}
            {/* https://www.jianshu.com/p/fcf1f86fc3a7 18移除了， */}
            <MenuContext.Provider value={passedContext}>
                {/*父组件现在都用children,要判断子组件类型操控子组件怎么办 */}
                {/* this.props.children可以是任何类型,可以是组件,数组,函数,对象,如果是函数,调用map方法就报错func().map() */}
                {/* react提供了几种方法: React.Children.map(children,function[(thisArg)]),自动跳过不合规则的children类型 */}
                {/* 设置组件displayName */}
                {/* {children}   */}
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

export default Menu;



//自定义一个rfc即可解决fc移除children的问题
import { PropsWithChildren, FC } from 'react';
import { MenuItemProps } from "./menuItem";

export type RFC<T = unknown> = FC<PropsWithChildren<T>>;