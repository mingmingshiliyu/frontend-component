import React, { FunctionComponentElement, MouseEvent, MouseEventHandler, useContext, useRef, useState } from "react";
import { StringLiteral } from "typescript";
import {CSSTransition} from 'react-transition-group'
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
    const nodeRef = useRef(null);
    const classes=classNames('menu-item submenu-item',className,{
        'is-active':context.index===index,
        'is-vertical': context.mode==='vertical',
        'is-opened':context.index===index,
        
    })
    const arrow=classNames({
        'arrow-down':open,
        'arrow-icon': true
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
        const styles:React.CSSProperties={
            //  backgroundColor: "green",
            backdropFilter: "blur(60px)",
            WebkitBackdropFilter: "blur(60px)"
        }
        return (
            <CSSTransition unmountOnExit appear nodeRef={nodeRef} in={open} timeout={200} classNames="zoom-in-top">
                <ul className={subMenuClasses} ref={nodeRef}  style={styles}>
                    {children}
                </ul>
            </CSSTransition>
        )
    }
    return (
        <li key={index} className={classes}>
            <div className="submenu-title" onClick={handleClick}>
                {title}
                <Icon icon="angle-down" className={arrow} theme='danger'/>
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName="SubMenu"

export default SubMenu;