
import React, {useState, useEffect, useRef}  from 'react'
import Input from '../components/Input';
import axios from 'axios'
import Modal from '../components/Modal';
import WebsiteLayout from '../layouts/WebsiteLayout'



function NewItinerary() {
  const name = useRef()
  const city = useRef()
  const price = useRef()
  const likes = useRef()
  const tags = useRef()
  const captureData = async (e) => {
    e.preventDefault()
    const newItinerary = {
      name: name.current.value,
      // user: user.current.value,
      city: city.current.value,
      price: price.current.value,
      likes: likes.current.value,
      tags: tags.current.value,
    }
    console.log(newItinerary)
    await axios.post('http://localhost:4000/cities/', newItinerary)
    console.log(name)
    // console.log(user
    // )
  }
  const optionView = (option) => (
    <>
    <option value="" disabled selected hidden>Select a city...</option>
    <option className="OptionSelect">{option.city}</option>
    </>
  );
  
  const [items, setItems] = useState([]);

  const[isOpen,setIsOpen] = useState(false);


const openModal = () => setIsOpen(true);

const closeModal = () => setIsOpen(false);

useEffect(() => {
  axios.get("http://localhost:4000/cities/")
    .then((res) => setItems(res.data));
}, [])

  return (
    <WebsiteLayout>
    <Modal isOpen={isOpen} closeModal={closeModal} text="Itinerary Succesfully!"/>
      <div className="newcity-body">
        <div className='tittle-form-page'>
          <img src="/img/gummy-city.svg" alt="icon" className='city-form' />
          <h1 className='title-form'>My <span className='my-style'> Tinerary</span>!</h1>
        </div>
        <div className='FormImgContainer'>
          <div className="MainNewCity">
            <form className='form' onSubmit={captureData}>
            <Input text="Name" reference={name}></Input>
            <select onChange={optionView} className="EditSelect"  ref={city}>{items.response?.map(optionView)}</select>
              <Input text="Price" reference={price}></Input>
           
             
              <Input text="tags " reference={tags }></Input>

        


              <button onClick={openModal} className='welcomePage-button'>New Itinerary</button>

              

            </form>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}
export default NewItinerary





