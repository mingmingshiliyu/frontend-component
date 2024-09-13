import {CSSTransitionProps} from 'react-transition-group/CSSTransition'
import {CSSTransition} from 'react-transition-group'


type AnimationName="zoom-in-top"|"zoom-in-left"|"zoom-in-bottom"|"zoom-in-right"

//interface不能继承混合类型，所以interface TransitionProps extends CSSTransitionProp会报错
//混合类型&，| 只能用type来接
type TransitionProps= CSSTransitionProps&{
    animation?:AnimationName
    children?:React.ReactNode,
    // classNames?:string,
    unmountOnExit?:boolean,
    appear?:boolean,
    timeout?:number,
    in?:boolean
}

const Transition:React.FC<TransitionProps> = ({
    children,
    classNames, //CSSTransitionProps中
    unmountOnExit=true,
    appear=true,
    animation,
    
    ...restProps
}) => {
    return (
        <>
        <CSSTransition  unmountOnExit appear
            classNames={classNames?classNames:animation}
            {...restProps}
        >
            {children}
        </CSSTransition>
        </>
    )
}

export default Transition;