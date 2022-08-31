import '../styles/NewCity.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Input from '../components/Input';
function NewCity() {
  return (
    <WebsiteLayout>
      <div className='newcity-body'>
        <div className='title-form-page'>
          <h1 className='title-form'>Add A<span className='my-style'> City</span>!</h1>
          <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
        </div>
        <div className='form'>
        <Input text="City"></Input>
        <Input text="Country"></Input>
        <Input text="Description"></Input>
        <button className="welcomePage-button">Send</button>
        </div>
      </div>
    </WebsiteLayout>
  );
}
export default NewCity;