import '../styles/Cities.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import CityCard from '../components/CityCard';
import {useEffect, useState} from 'react';
import axios from "axios";

function Cities() {

  const [items, setItems] = useState([])
  useEffect(()=>{
      axios.get("http://localhost:4000/cities/")
      .then(res => setItems(res.data))
  },[])

const itemView = (item) => (
    <CityCard image={item.photo} title={item.city}></CityCard>
)
  return (
    <WebsiteLayout>
      <div className='cities-main'>
        <div className="cards-cities-container">
        {items.map(itemView)}
        </div>
      </div>
    </WebsiteLayout>
  );
}
export default Cities;
