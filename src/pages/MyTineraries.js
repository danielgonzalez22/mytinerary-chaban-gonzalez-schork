import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/MyTineraries.css'
import { useGetItinerariesUsersQuery } from '../features/actions/itinerariesApi'
import Itinerary from '../components/Itinerary/Itinerary'

export default function MyTineraries() {
    
    let { data: items,
        isLoading,
        isSuccess,
        isFailed, } = useGetItinerariesUsersQuery('6318f2cf86ea60a969d24e49')
      if (isLoading) {
        items = []
        console.log("Loading");
      } else if (isSuccess) {
        console.log("Load succesfully");
      } else if (isFailed) {
        console.log("3");
        items = [];
      }
      let itineraries=items.response
      const itemView = (item) => (
        <Itinerary items={item}/>      )

    return (
        <WebsiteLayout>
      <div className='container-itineraries'>
        
        {itineraries.map((item) =><Itinerary items={item}/>)}
        </div>
      </WebsiteLayout>
    )
  }






