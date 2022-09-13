import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/MyTineraries.css'
import { useGetItinerariesUsersQuery } from '../features/actions/itinerariesApi'
import Itinerary from '../components/Itinerary/Itinerary'

export default function MyTineraries() {
  let { data: items } = useGetItinerariesUsersQuery('6318f2cf86ea60a969d24e49')
  return (
    <WebsiteLayout>
      <div className='container-itineraries'>
        {items?.map((item) => <Itinerary itinerary={item} />)}
      </div>
    </WebsiteLayout>
  )
}






