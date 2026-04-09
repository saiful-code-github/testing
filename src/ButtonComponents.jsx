const ButtonComponents = ({text, children, className,type="button", style, onclick}) => {
    return (
        <button type={type} onClick={onclick} style={style} className={`${className} py-[6px] px-[20px] text-white`}>{text} {children}</button>
    )
}
export default ButtonComponents;