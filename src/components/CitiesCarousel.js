import Carousel from "./Carousel";
import axios from "axios";
import {useEffect, useState} from 'react';

function CitiesCarousel() {
    const [items, setItems] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/cities/")
        .then(res => setItems(res.data))
    },[])

    return (
        <Carousel data={items} range={4} title="Popular MyTineraries!" />
    )
}
export default CitiesCarousel