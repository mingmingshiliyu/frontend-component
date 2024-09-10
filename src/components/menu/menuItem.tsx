import classNames from "classnames";
import { useContext } from "react";
import { MenuContext } from "./menu";


export interface MenuItemProps {
    index?:number;
    disabled?:boolean;
    className?:string;
    style?:React.CSSProperties;
    onSelect?:(selectedIndex:number)=>void
    children?:React.ReactNode;
}



const MenuItem:React.FC<MenuItemProps> = ({
    index,
    disabled,
    className,
    style,
    children
})=>{
    const context = useContext(MenuContext)
    // menu-item表示默认有menu-item这个class
    const classes = classNames('menu-item',className,{
        'is-disabled':disabled,
        'is-active':context.index===index //通过context将父组件的选中index传下来
    })
    const handleClick = () => {
        //index设置可选,可能为undefined,所以需要typeof判定
        if(context.onSelect &&!disabled&&(typeof index==='number')){
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}

MenuItem.displayName="menuItem"

export default MenuItem;