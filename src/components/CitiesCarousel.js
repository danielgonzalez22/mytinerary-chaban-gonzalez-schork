import Carousel from "./Carousel";
import { useGetAllCitiesQuery } from '../features/actions/citiesApi'

function CitiesCarousel() {

  let { data: items,
    isLoading,
    isSuccess,
    isFailed, } = useGetAllCitiesQuery()
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