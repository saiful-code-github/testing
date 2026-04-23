const ButtonComponents = ({text, className, style, onClick, type}) => {
    return (
        <button onClick={onClick} type={type} className={`font-medium p-0 cursor-pointer ${className}`} style={style}>{text}</button>
    )
}
export default ButtonComponents;