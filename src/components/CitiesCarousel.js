import Carousel from "./Carousel";
import axios from "axios";
import {useEffect, useState} from 'react';
import {useCarouselQuery} from '../features/actions/carouselApi'

function CitiesCarousel() {
    // const [items, setItems] = useState([])
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/cities/")
    //     .then(res => setItems(res.data))
    // },[])
    let {data : items,isLoading,
        isSuccess,
        isFailed,} = useCarouselQuery()
    if (isLoading) {
        items = []
        console.log("Loading");
      } else if (isSuccess) {
        console.log("Load succesfully");
    
      } else if (isFailed) {
        console.log("3");
        items = [];
      }
    return (
        <Carousel data={items} range={4} title="Popular MyTineraries!" />
    )
}
export default CitiesCarousel