import '../styles/Cities.css';
import { useState, useRef } from "react"
import WebsiteLayout from '../layouts/WebsiteLayout';
import CityCard from '../components/CityCard';
import { citiesAPI } from '../features/actions/citiesApi'

function Cities() {
const [cityName, setCityName] = useState("")
    let { data: items} = citiesAPI.useGetAllCitiesQuery(cityName)
    let searchRef = useRef()

  const itemView = (item) => (
    <CityCard image={item.photo} title={item.city} id={item._id}></CityCard>
  )
  const search = () =>{setCityName(searchRef.current.value)}
  return (
    <WebsiteLayout>
      <div className='cities-main'>
      <input type="text" placeholder="Search..." onChange={search} ref={searchRef} className="cities-search"></input>
        <div className="cards-cities-container">
          {items?.map(itemView)}
        </div>
      </div>
    </WebsiteLayout>
  );
}
export default Cities;
