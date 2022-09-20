import Carousel from "./Carousel";
import { useGetAllCitiesQuery } from '../features/actions/citiesApi'

function CitiesCarousel() {

  let { data: items} = useGetAllCitiesQuery("")
  
  return (
    <Carousel cities={items?.slice(0,12)} range={4} title="Popular MyTineraries!" />
  )
}
export default CitiesCarousel