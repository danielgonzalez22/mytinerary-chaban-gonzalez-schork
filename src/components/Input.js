import '../styles/Input.css';
function Input(props) {
  return (
    <div>
      <input type="text" placeholder={props.text} className="input" ref={props.reference}></input>
    </div>
  );
}
export default Input;