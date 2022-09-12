import '../styles/Cities.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import CityCard from '../components/CityCard';
import { citiesAPI } from '../features/actions/citiesApi'

function Cities() {

    let { data: items,
      isLoading,
      isSuccess,
      isFailed, } = citiesAPI.useGetAllCitiesQuery()
    if (isLoading) {
      items = []
      console.log("Loading");
    } else if (isSuccess) {
      console.log("Load succesfully");

    } else if (isFailed) {
      console.log("3");
      items = [];
    }

  const itemView = (item) => (
    <CityCard image={item.photo} title={item.city} id={item._id}></CityCard>
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
