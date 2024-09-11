import React, { FunctionComponentElement, MouseEvent, MouseEventHandler, useContext, useState } from "react";
import { StringLiteral } from "typescript";
import { MenuContext } from "./menu";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
import Icon from "../icon/icon";

export interface SubMenuProps {
    index?: number;
    title: string;
    className?:string;
    children?:React.ReactNode
}

const SubMenu:React.FC<SubMenuProps> = ({index,title,children,className})=>{
    const [open,setOpen] =useState(false)
    const context = useContext(MenuContext)
    const classes=classNames('menu-item submenu-item',className,{
        'is-active':context.index===index
    })
    const handleClick = (e: MouseEvent)=>{
        e.preventDefault()
        setOpen(!open)
    }
    const renderChildren = () =>{
        const subMenuClasses=classNames('viking-submenu',{
            'menu-opened': open
        })
        React.Children.map(children,(child,i)=>{
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName==='MenuItem'){
                return childElement
                // return React.cloneElement(childElement,{
                //     index:i
                // })
            }else{
                console.log('no menuitem child')
            }
        })
        return (
            <ul className={subMenuClasses}>
                {children}
            </ul>
        )
    }
    return (
        <li key={index} className={classes}>
            <div className="submenu-title" onClick={handleClick}>
                {title}
                <Icon icon="angle-down" theme='danger'/>
            </div>
            {renderChildren()}
        </li>
    )
}

export default SubMenu;