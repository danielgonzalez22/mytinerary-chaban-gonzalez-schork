import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/NewItinerary.css'
import Input from '../components/Input'
import Modal from '../components/Modal'
import React, { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetOneCityQuery } from '../features/actions/citiesApi'
import { useCreateActivityMutation } from '../features/actions/activitiesApi'
import { usePostOneItineraryMutation } from '../features/actions/itinerariesApi'

function NewItinerary() {
  const userId = localStorage.getItem('userId')
  const [addItinerary, { data: body, error, isSuccess }] = usePostOneItineraryMutation()
  const [addACtivity] = useCreateActivityMutation()
  let alertMessage = ""
  let itineraryId = ""
  if (body?.success) {
    alertMessage = body.message
    itineraryId = body.response
  } else if (error) {
    alertMessage = error?.data.message
  }
  const params = useParams()
  const { id } = params
  let { data: city } = useGetOneCityQuery(id)
  const itName = useRef()
  const price = useRef()
  const duration = useRef()
  const tags = useRef()
  const actName = useRef()
  const photo = useRef()
  const [alertTimer, setAlertTimer] = useState()

  const [activities, setActivities] = useState([])
  const handleNewItSubmit = async (e) => {
    e.preventDefault()
    clearTimeout(alertTimer)
    const itinerary = {
      name: itName.current.value,
      user: userId,
      city: id,
      price: price.current.value,
      tags: tags.current.value,
      duration: duration.current.value
    }
    await addItinerary(itinerary)
    console.log(alertMessage)
    setIsOpen(true)

    hideAlert()
    //if (isSuccess) { e.target.reset() }

    //if (activities?.length > 0) {
    // activities.forEach(async (element) => {
    //   element.itinerary = itineraryId
    //   console.log(activities)
    //   await addACtivity(element)
    // })
    // }
  }

  const hideAlert = () => {
    let timer = setTimeout(() => {
      setIsOpen(false)
    }, 3000)
    setAlertTimer(timer)
  }
  const handleNewActSubmit = (e) => {
    e.preventDefault()
    const act = {
      name: actName.current.value,
      photo: photo.current.value
    }
    setActivities(oldArray => [...activities, act])
    e.target.reset()
    setOpen(false)
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    open ?
      setOpen(false)
      : setOpen(true)
  }
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const showActs = (act) => (
    <div className="activities-container">
      <div className="activities-item" key={act.name} style={{ backgroundImage: `url(${act.photo})` }}>
        <p className="activities-item-name">{act.name}</p>
      </div>
    </div>
  )
  return (
    <WebsiteLayout>
      <Modal isOpen={isOpen} closeModal={closeModal} text={alertMessage} result={isSuccess} />
      <div className="newIt-main">
        <div className='newIt-header'>
          <img src={city?.photo} alt="city banner" className='newIt-city-img' />
          <h1 className='title-form'>New<span className='my-style'> Itinerary</span>!</h1>
        </div>
        <div className="newIt-forms-container">
          <form className='newIt-it-form' id='newIt-it-form' onSubmit={handleNewItSubmit}>
            <Input text="Name" reference={itName}></Input>
            <Input text="Duration" reference={duration}></Input>
            <Input text="Price" reference={price}></Input>
            <Input text="tags " reference={tags}></Input>
          </form>
          <div className='newIt-act-container'>
            <button className="welcomePage-button" type="button" onClick={handleOpen}>
              {open ? "Cancel" : "Add activity"} </button>
            {open &&
              <form className='newIt-act-form' onSubmit={handleNewActSubmit}>
                <Input text="Name" reference={actName}></Input>
                <Input text="Photo URL" reference={photo}></Input>
                <button className='welcomePage-button'>CONFIRM</button>
              </form>
            }
          </div>
        </div>
        <div className='newIt-act-preview-container'>
          <h3>Activites</h3>
          <div className='newIt-act-preview'>
            {activities.length > 0 ?
              activities.map(showActs)
              :
              <p>no activities yet...</p>
            }
          </div>
        </div>
        <button className='welcomePage-button' type='submit' form='newIt-it-form'>CREATE ITINERARY</button>
      </div>
    </WebsiteLayout>
  )
}
export default NewItinerary





