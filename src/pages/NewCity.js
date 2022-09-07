import '../styles/NewCity.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Input from '../components/Input';
// import * as React from 'react';
// function NewCity() {
//   const model = ["Image URL","City Name","Country", "Description","Population","Foundation Year"];

//   const imageRef = React.useRef();
//   const cityRef = React.useRef();
//   const countryRef = React.useRef();
//   const descriptionRef = React.useRef();
//   const populationRef = React.useRef();
//   const foundationRef = React.useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(imageRef.current.value);
//     console.log(cityRef.current.value);
//     console.log(countryRef.current.value);
//     console.log(descriptionRef.current.value);
//     console.log(populationRef.current.value);
//     console.log(foundationRef.current.value);
//   }

//   return (
//     <WebsiteLayout>
//       <div className='newcity-body'>
//         <div className='title-form-page'>
//           <h1 className='title-form'>Add A<span className='my-style'> City</span>!</h1>
//           <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
//         </div>
//         <form className='form' onSubmit={handleSubmit}>
//         <Input text="Image Url" reference = {imageRef}></Input>
//         <Input text="City Name" reference = {cityRef}></Input>
//         <Input text="Country" reference = {countryRef}></Input>
//         <Input text="Description" reference = {descriptionRef}></Input>
//         <Input text="Population" reference = {populationRef}></Input>
//         <Input text="Foundation Year" reference = {foundationRef}></Input>
//         <button className="welcomePage-button">Send</button>
//         </form>
//       </div>
//     </WebsiteLayout>
//   );
// }
// export default NewCity;
// import '../styles/NewCities.css'
// import Input from '../components/Input.js'
import React, { useState, useRef } from 'react'
import axios from 'axios'

function NewCity() {

  const initialValor = {
    city: '',
    country: '',
    photo: '',
    population: '',
    foundation: '',
    // currency: '',
    // highseason: ''
  }

  const [city, setCity] = useState(initialValor)

  const name =  useRef()
  const country =  useRef()
  const photo =  useRef()
  const population =  useRef()
  const foundation =  useRef()
  const captureData = async (e) => {
    e.preventDefault()
    const newCity = {
      city: name.current.value,
      country: country.current.value,
      photo: photo.current.value,
      population:population.current.value,
      foundation: foundation.current.value,
      // currency: city.currency,
      // highseason: city.highseason
    }
console.log(newCity)
    await axios.post('http://localhost:4000/cities/', newCity)
    // setCity({ ...city, [name]: value })
    console.log(name)
    console.log(country
      )
  }

  const saveData = async (e) => {
    e.preventDefault()

    const newCity = {
      city: city.city,
      country: city.country,
      photo: city.image,
      population: city.population,
      foundation: city.foundation,
      // currency: city.currency,
      // highseason: city.highseason
    }

    await axios.post('http://localhost:4000/NewCity', newCity)

    setCity({ ...initialValor })
  }

  return (
    <WebsiteLayout>

    <div className="newcity-body">
      <div className='tittle-form-page'>
        
      <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
      <h1 className='title-form'>Add A<span className='my-style'> City</span>!</h1>
      </div>
      <div className='FormImgContainer'>
        <div className="MainNewCity">
          {/* <Input /> */}
          <form className='form' onSubmit={captureData}>
            <input
              type="text"
              className="input"
              placeholder='City'
              required
              name="city"
              ref={name}
              />
            <input type="text"
              className="input"
              placeholder='Country'
              required
              name="country"
              ref={country}/>
              
                
              <input type="text"
                className="input"
                placeholder='PhotoURL'
                required
                name="photo"
                ref={photo} />
                
              <input type="text"
                className="input"
                placeholder='Population'
                required
                name="population"
                ref={population} />
               
              <input type="text"
                className="input"
                placeholder='Foundation'
                required
                name="foundation"
                ref={foundation} />
           
              <button className='welcomePage-button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
                </WebsiteLayout>
    )
}
export default NewCity