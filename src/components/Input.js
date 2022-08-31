import '../styles/Input.css';
function Input(props) {
  return (
        <div>
            <input placeholder={props.text} className="input"></input>
        </div>
  );
}
export default Input;