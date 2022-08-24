import "../styles/Arrow.css"


function Arrow(props) {
    return (
        <button className="arrow" onClick={props.click}>
            <img src={props.icon}></img>
        </button>
    )
}
export default Arrow;