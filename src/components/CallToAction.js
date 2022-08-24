import '../styles/CallToAction.css';
import {Link as LinkRouter} from 'react-router-dom'
function CallToAction() {
  return (
      <div>
        <LinkRouter to='/Cities' className="navLink"><button className="welcomePage-button">start a journey</button></LinkRouter>
        
      </div>
  );
}
export default CallToAction;