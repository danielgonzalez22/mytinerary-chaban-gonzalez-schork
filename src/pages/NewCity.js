import '../styles/NewCity.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Input from '../components/Input';
import * as React from 'react';
function NewCity() {
  const model = ["Image URL","City Name","Country", "Description","Population","Foundation Year"];

  const imageRef = React.useRef();
  const cityRef = React.useRef();
  const countryRef = React.useRef();
  const descriptionRef = React.useRef();
  const populationRef = React.useRef();
  const foundationRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(imageRef.current.value);
    console.log(cityRef.current.value);
    console.log(countryRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(populationRef.current.value);
    console.log(foundationRef.current.value);
  }

  return (
    <WebsiteLayout>
      <div className='newcity-body'>
        <div className='title-form-page'>
          <h1 className='title-form'>Add A<span className='my-style'> City</span>!</h1>
          <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
        </div>
        <form className='form' onSubmit={handleSubmit}>
        <Input text="Image Url" reference = {imageRef}></Input>
        <Input text="City Name" reference = {cityRef}></Input>
        <Input text="Country" reference = {countryRef}></Input>
        <Input text="Description" reference = {descriptionRef}></Input>
        <Input text="Population" reference = {populationRef}></Input>
        <Input text="Foundation Year" reference = {foundationRef}></Input>
        <button className="welcomePage-button">Send</button>
        </form>
      </div>
    </WebsiteLayout>
  );
}
export default NewCity;