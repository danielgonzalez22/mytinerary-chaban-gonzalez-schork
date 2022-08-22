function Arrow(props) {
    return (
        <button className="arrow" onClick={props.click}>
            {props.icon}
        </button>
    )
}
export default Arrow;