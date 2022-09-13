import '../styles/Cities.css';
import { useState, useEffect } from "react"
import WebsiteLayout from '../layouts/WebsiteLayout';
import CityCard from '../components/CityCard';
import { citiesAPI } from '../features/actions/citiesApi'

function Cities() {
const [cityName, setCityName] = useState("")
    let { data: items} = citiesAPI.useGetAllCitiesQuery(cityName)
    

  const itemView = (item) => (
    <CityCard image={item.photo} title={item.city} id={item._id}></CityCard>
  )
  return (
    <WebsiteLayout>
      <div className='cities-main'>
        <div className="cards-cities-container">
          {items?.map(itemView)}
        </div>
      </div>
    </WebsiteLayout>
  );
}
export default Cities;
