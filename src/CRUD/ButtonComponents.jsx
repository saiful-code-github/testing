const ButtonComponents = ({text, type="button", className, style, onclick}) => {
    return (
        <button type={type} className={`${className} cursor-pointer`} style={style} onClick={onclick}>{text}</button>
    )
}
export default ButtonComponents;