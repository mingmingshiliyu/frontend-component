import classNames from 'classnames';
import React from 'react'


export enum ButtonSize {
    Large="lg",
    Small="sm",
    Normal="nm",
}

export enum ButtonType {
    Primary = "primary",
    Default = "defualt",
    Danger = "danger",
    Link = "link"
}

interface BaseButtonProps {
    disabled:boolean;
    className?:React.CSSProperties;
    style?:string;
    size?:ButtonSize;
    type?:ButtonType; //btnType，如果想跟button本身type区分，则要emit
    href?:string;
    autoFocus?:React.ReactNode;
    children:React.ReactNode;
    onClick: ()=>void
}

// const initCssProperties = () => {
//     const styles:React.CSSProperties={
//         textAlign: 'center',
//         // backdropFilter: ,
//     }
//     return styles
// }

/**
 * Primary UI component for user interaction
 */
const Button:React.FC<BaseButtonProps> = ({
    // aaa, 不能带BaseButtonProps中没有的参数
    disabled=false,
    size,
    type,
    href,
    children,
}) => {
    const classes = classNames('btn',{
        [`btn-${type}`]:type,
        [`btn-${size}`]:size,
        'background':"blue",
        'disabled':(type === ButtonType.Link&&disabled)
    })
    //link类型的用a，没有边框
    if(type ==ButtonType.Link&&href){
        return (
            <a
            className={classes} //a属性的disabbled添加到class里，本身自带，button自带这个属性
            href={href}
            >
                {children}
            </a>
        )
    }else{
        return <button
            className={classes}
            disabled={disabled}
        >
            {children}
        </button>
    }
}

//直接在结构时赋予默认值，不需要这个
// Button.defaultProps={
//     disabled: false,
//     type: ButtonType.Default,
// }


export default Button; 