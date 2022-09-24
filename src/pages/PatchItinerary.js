import "../styles/EditCity.css"
import WebsiteLayout from "../layouts/WebsiteLayout"
import Input from "../components/Input"
import React, { useState, useRef, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import Modal from "../components/Modal"
import axios from "axios"
import { useGetOneItineraryQuery } from '../features/actions/itinerariesApi'

function PatchItinerary() {
  const loggedUserId = localStorage.getItem("userId")
  const [message, setMessage] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams()
  const navigate = useNavigate();
  const { id } = params
  let { data: itinerary } = useGetOneItineraryQuery(id)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  const nameRef = useRef()
  const priceRef = useRef()
  const tagsRef = useRef()
  const durationRef = useRef()
  let cityId

  const loadForm = () => {
    nameRef.current.value = itinerary?.name
    priceRef.current.value = itinerary?.price
    tagsRef.current.value = itinerary?.tags
    durationRef.current.value = itinerary?.duration
  }
  loadForm()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const itineraryObj = {
      name: nameRef.current.value,
      user: loggedUserId,
      city: cityId,
      price: priceRef.current.value,
      tags: tagsRef.current.value,
      duration: durationRef.current.value,
    }
    await axios.patch(`http://localhost:4000/itineraries/${id}`, itineraryObj)
      .then(response => {
        setMessage(response.statusText)
      })
  }
  return (
    <WebsiteLayout>
      <Modal isOpen={isOpen} closeModal={closeModal} text={message} result={message} />
      <div className="newcity-body">
        <div className="tittle-form-page">
          <img src="/img/gummy-city.svg" alt="icon" className="city-form" />
          <h1 className="title-form">
            Edit An<span className="my-style"> Itinerary</span>!
          </h1>
        </div>
        <div className="FormImgContainer">
          <div className="MainNewCity">
            <form className="form" onSubmit={handleSubmit}>
              <Input text="Name" reference={nameRef}></Input>
              <Input text="Price" reference={priceRef}></Input>
              <Input text="Tags" reference={tagsRef}></Input>
              <Input text="Duration" reference={durationRef}></Input>
              <button onClick={openModal} className="welcomePage-button" >Submit</button>
            </form>
          </div>
        </div>
      </div>
      <button className="goBack" onClick={() => navigate(-1)}>Go back</button>
    </WebsiteLayout>
  )
}
export default PatchItinerary