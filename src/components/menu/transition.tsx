import {CSSTransitionProps} from 'react-transition-group/CSSTransition'
import {CSSTransition} from 'react-transition-group'


type AnimationName="zoom-in-top"|"zoom-in-left"|"zoom-in-bottom"|"zoom-in-right"

interface TransitionProps extends CSSTransitionProps{
    animation?:AnimationName
    children?:React.ReactNode,
    classNames?:string,
    unmountOnExit?:boolean,
    appear?:string,

}

const Transition:React.FC<TransitionProps> = ({
    children,
    classNames,
    unmountOnExit=true,
    appear=true,
    animation,
    ...restProps
}) => {
    return (
        <>
        <CSSTransition  unmountOnExit appear  timeout={200} classNames="zoom-in-top"
            // classNames={classNames?classNames:animation}
            // {...restProps}
        >
        </CSSTransition>
        </>
    )
}

export default Transition;