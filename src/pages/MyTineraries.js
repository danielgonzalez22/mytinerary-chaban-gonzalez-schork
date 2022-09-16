import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/MyTineraries.css'
import { useGetItinerariesUsersQuery } from '../features/actions/itinerariesApi'
import Itinerary from '../components/Itinerary/Itinerary'

export default function MyTineraries() {
  let { data: items } = useGetItinerariesUsersQuery('6323e552205e25f2e07cd49a')
  return (
    <WebsiteLayout>
      <div className='container-itineraries'>
        {items?.map((item) => <Itinerary itinerary={item} />)}
      </div>
    </WebsiteLayout>
  )
}






