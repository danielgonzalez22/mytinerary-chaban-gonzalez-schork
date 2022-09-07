import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/City.css'
import { Link as LinkRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function City() {
  const [city, setCity] = useState({})
  const params = useParams()
  const { id } = params
  useEffect(() => {
    axios.get("http://localhost:4000/cities/" + [id])
      .then(res => setCity(res.data.response))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // const getCity = async () => {
  //     try {
  //         const res = await axios.get('http://localhost:4000/cities/' + {id})

  //     if (res.data){
  //         return setCity(res.data)
  //     }
  //     // throw new Error ("Ups! An error ocurred")
  //     }catch (error){
  //         return console.log(error.message);
  //     }
  // }

  console.log(city);

  // useEffect(() => {
  //     getCity()
  // }, [])
  const navigate = useNavigate();
  return (
    <WebsiteLayout>
      <div className="city-main">
        <div className='city-container'>
          <img src={city.photo} alt='city-img'></img>
          <div className='city-details'>
            <ul>
              <li>Name:{city.city}</li>
              <li>Country:{city.country}</li>
              <li>Population:{city.population}</li>
              <li>Foundation:{city.foundation}</li>
            </ul>
            {/* <h3>Description</h3>
            <p className='description-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nihil, consectetur molestias autem est earum porro nulla neque sapiente tempora, atque quod quae natus? Voluptates nesciunt sunt id sequi officiis, consequatur impedit, perspiciatis sit, vel ex est quae corrupti mollitia ut necessitatibus a explicabo deleniti repudiandae tempora quo aliquid dolor!</p> */}
          </div>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </WebsiteLayout>
  )
}