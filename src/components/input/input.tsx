import classNames from "classnames";
import { InputHTMLAttributes, ReactNode } from "react";
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import Icon from "../icon/icon";

export type InputSize = "lg"|"sm"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>,'size'>{
    classNames?:string,
    size?:InputSize,
    disabled?:boolean,
    icon?:IconProp,
    prepand?:string|React.ReactElement,
    append?:string|React.ReactElement,
}

const Input:React.FC<InputProps> = ({
    children,
    className,
    size,
    disabled=false,
    icon,
    prepand,
    append,
    ...restProps
}) =>{
    const classes = classNames('viking-input-wrapper',{
        'input-disabled': disabled,
        [`input-size-${size}`]:size,

    })
    return (
        <div className={classes}>
            {prepand&&<div>{prepand}</div>}
            {icon&&<Icon className="icon-wrapper" icon={icon}></Icon>}
            <input disabled={disabled}
            {...restProps}
            >
            </input>
            {append&&<div>{append}</div>}
        </div>
    )

}

export default Input;