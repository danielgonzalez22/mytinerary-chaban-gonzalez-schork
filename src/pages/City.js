import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/City.css'
import { useParams, useNavigate } from 'react-router-dom'
import Itinerary from "../components/Itinerary/Itinerary"
import { useGetOneCityQuery } from '../features/actions/citiesApi'
import { useGetCityItinerariesQuery } from '../features/actions/itinerariesApi'

export default function City() {
  const params = useParams()
  const { id } = params
  let { data: city} = useGetOneCityQuery(id)
  let { data: itineraries} = useGetCityItinerariesQuery(id)
  
  const navigate = useNavigate();

  return (
    <WebsiteLayout>
      {city?
        <div className='city-container'>
          <img className='city-img' src={city.photo} alt='city-img'></img>
          <div className='city-details'>
            <ul>
              <li>Name: {city.city}</li>
              <li>Country: {city.country}</li>
              <li>Population: {city.population}</li>
              <li>Foundation: {city.foundation}</li>
            </ul>
            <h3>Description</h3>
            <p className='description-p'>{city.description}</p>
          </div>
          <div>
           {itineraries?((itineraries.length>0)? itineraries.map(itinerary=><Itinerary itinerary={itinerary}/>): <p>No itineraries here...</p>): <p>No itineraries here...</p>}           
          </div>
          <button className="goBack" onClick={() => navigate(-1)}>Go back</button>
        </div>
    :<p>City not found on database</p>
    }
    </WebsiteLayout >
  )
}
