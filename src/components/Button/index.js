const Button = (props) => {
    const {
        className,
        children,
        onClick,
        disabled,
       color
    } = props;
    return (
        <button
        className={className + ` btn btn-${color === undefined ? 'primary' : color}`}
        onClick={onClick}
        disabled={disabled}
       
        >
        {children}
        </button>
    );
}

export default Button;