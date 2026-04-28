const ButtonComponents = ({type="button", className, style, text, onClick}) => {
    return (
        <button type={type} onClick={onClick} className={` ${className}`} style={style}>{text}</button>
    )
}
export default ButtonComponents;