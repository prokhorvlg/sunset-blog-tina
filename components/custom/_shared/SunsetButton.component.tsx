const SunsetButton = ({
    text
}) => {
    return (
        <button className="sunset-button">
            <div className="background"></div>
            <div className="main-border"></div>
            <span>{text}</span>
        </button>
    )
}

export default SunsetButton;