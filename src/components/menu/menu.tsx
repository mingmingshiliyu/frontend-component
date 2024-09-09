

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

const Menu:RFC<MenuProps> = ({className,mode='horizontal',style,children,defaultIndex=0}) =>{
    // const {className,mode,style,children,defaultIndex} = props
    const classes = classNames('viking-menu',className,{
        'menu-vertical': mode === 'vertical'
    })
    return (
        <ul className={classes} style={style}>
            {/* //本来应该是React.FC默认有的，不需要申明，但不知道为什么不能直接用 */}
            {/* https://www.jianshu.com/p/fcf1f86fc3a7 18移除了， */}
            {children}  
        </ul>
    )
}

export default Menu;



//自定义一个rfc即可解决fc移除children的问题
import { PropsWithChildren, FC } from 'react';

export type RFC<T = unknown> = FC<PropsWithChildren<T>>;