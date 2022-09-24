import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/MyTineraries.css'
import { useGetItinerariesUsersQuery } from '../features/actions/itinerariesApi'
import Itinerary from '../components/Itinerary/Itinerary'

export default function MyTineraries() {
  const userId = localStorage.getItem('userId')
  let { data: items } = useGetItinerariesUsersQuery(userId)
  return (
    <WebsiteLayout>
      <div className='container-itineraries'>
        {items?.map((item) => <Itinerary itinerary={item} userId={userId} />)}
      </div>
    </WebsiteLayout>
  )
}






