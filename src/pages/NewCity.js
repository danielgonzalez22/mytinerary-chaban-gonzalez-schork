import '../styles/NewCity.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Input from '../components/Input';
import React, { useState, useRef } from 'react'
import axios from 'axios'

function NewCity() {

  const initialValor = {
    city: '',
    country: '',
    photo: '',
    population: '',
    foundation: '',
    description: '',
  }

  const [city, setCity] = useState(initialValor)

  const name =  useRef()
  const country =  useRef()
  const photo =  useRef()
  const population =  useRef()
  const foundation =  useRef()
  const description = useRef()
  const captureData = async (e) => {
    e.preventDefault()
    const newCity = {
      city: name.current.value,
      country: country.current.value,
      photo: photo.current.value,
      population:population.current.value,
      foundation: foundation.current.value,
      description: description.current.value,
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
      description: city.description,
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
                <textarea type="text"
                className="input"
                placeholder='Description'
                required
                name="description"
                ref={description} />
           
              <button className='welcomePage-button'>Submit</button>
          </form>
        </div>
      </div>
    </div>
                </WebsiteLayout>
    )
}
export default NewCity