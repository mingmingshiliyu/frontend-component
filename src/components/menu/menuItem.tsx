import classNames from "classnames";


export interface MenuItemProps {
    index?:number;
    disabled?:boolean;
    className?:string;
    style?:React.CSSProperties;
}

const MenuItem:React.FC<MenuItemProps> = ({
    index,
    disabled,
    className,
    style,
    children
})=>{
    // menu-item表示默认有menu-item这个class
    const classes = classNames('menu-item',className,{
        'is-disabled':disabled,
    })
    return (
        <li className={classes} style={style}>
            {children}
        </li>
    )
}

export default MenuItem;