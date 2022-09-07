import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/City.css'
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
            <h3>Description</h3>
            <p className='description-p'>{city.description}</p>
          </div>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </WebsiteLayout>
  )
}