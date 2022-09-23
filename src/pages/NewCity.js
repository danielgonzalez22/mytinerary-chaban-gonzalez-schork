import '../styles/NewCity.css'
import WebsiteLayout from '../layouts/WebsiteLayout'
import Input from '../components/Input'
import React, { useRef, useState } from 'react'
import Modal from '../components/Modal'
import { usePostOneCityMutation } from '../features/actions/citiesApi'

function NewCity() {
  const [addCity, { data: body, error, isSuccess }] = usePostOneCityMutation()
  let alertMessage = ""
  if (body?.success) {
    alertMessage = body.message
  } else if (error) {
    alertMessage = error?.data.message
  }
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const [alertTimer, setAlertTimer] = useState()
  const name = useRef()
  const country = useRef()
  const photo = useRef()
  const population = useRef()
  const foundation = useRef()
  const description = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    clearTimeout(alertTimer)
    const city = {
      city: name.current.value,
      country: country.current.value,
      photo: photo.current.value,
      population: population.current.value,
      foundation: foundation.current.value,
      description: description.current.value,
    }
    await addCity(city)
    setIsOpen(true)
    hideAlert()
    if(isSuccess){e.target.reset()}
  }
  const hideAlert = () => {
    let timer = setTimeout(() => {
      setIsOpen(false)
    }, 3000)
    setAlertTimer(timer)
  }
  return (
    <WebsiteLayout>
      <Modal isOpen={isOpen} closeModal={closeModal} text={alertMessage} result={isSuccess} />
      <div className="newcity-body">
        <div className='tittle-form-page'>
          <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
          <h1 className='title-form'>Add A<span className='my-style'> City</span>!</h1>
        </div>
        <div className='FormImgContainer'>
          <div className="MainNewCity">
            <form className='form' onSubmit={handleSubmit} >
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
              <button className='welcomePage-button'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}
export default NewCity