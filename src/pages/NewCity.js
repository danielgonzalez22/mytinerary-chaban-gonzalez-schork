import '../styles/NewCity.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import Input from '../components/Input';
import React, { useRef , useState } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'

function NewCity() {
  const name = useRef()
  const country = useRef()
  const photo = useRef()
  const population = useRef()
  const foundation = useRef()
  const description = useRef()
  const captureData = async (e) => {
    e.preventDefault()
    const newCity = {
      city: name.current.value,
      country: country.current.value,
      photo: photo.current.value,
      population: population.current.value,
      foundation: foundation.current.value,
      description: description.current.value,
    }
    console.log(newCity)
    await axios.post('http://localhost:4000/cities/', newCity)
    console.log(name)
    console.log(country
    )
  }

  const[isOpen,setIsOpen] = useState(false);


const openModal = () => setIsOpen(true);

const closeModal = () => setIsOpen(false);

  return (
    <WebsiteLayout>
    <Modal isOpen={isOpen} closeModal={closeModal} text="City Added Succesfully!"/>
      <div className="newcity-body">
        <div className='tittle-form-page'>
          <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
          <h1 className='title-form'>Add A<span className='my-style'> City</span>!</h1>
        </div>
        <div className='FormImgContainer'>
          <div className="MainNewCity">
            <form className='form' onSubmit={captureData}>
            <Input text="City" reference={name}></Input>
              <Input text="Country" reference={country}></Input>
              <Input text="PhotoURL" reference={photo}></Input>
              <Input text="Population" reference={population}></Input>
              <Input text="Foundation" reference={foundation}></Input>
              <textarea type="text"
                className="input"
                placeholder='Description'
                required
                name="description"
                ref={description} />
              <button onClick={openModal} className='welcomePage-button'>Submit</button>

              

            </form>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}
export default NewCity