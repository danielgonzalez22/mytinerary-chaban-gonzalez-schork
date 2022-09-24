import Activity from "./Activity"
import Comment from "./Comment"
import { useGetItinerariesCommentMutation } from '../../features/actions/commentsApi'
import { useGetItineraryActivitiesQuery } from '../../features/actions/activitiesApi'
import '../../styles/Itinerary/Itinerary.css'
export default function Itinerary(props) {
  const itinerary = props.itinerary
  const userId = props.userId
  let isOwned = false
  if (userId === itinerary.user._id) {
    isOwned = true
  }
  let { data: comments } = useGetItinerariesCommentMutation(itinerary._id)
  let { data: activities } = useGetItineraryActivitiesQuery(itinerary._id)
  return (
    <div className="it-body">
      <p className="name-it">{itinerary.name}</p>
      <div className="main-it">
        <div className="user-it">
          <img src={itinerary.user.photo} alt="img-user" className="img-user" />
          <p>{itinerary.user.name} {itinerary.user.lastName}</p>
          <p>{itinerary.user.country}</p>
        </div>
        <div className="data-it">
          <p>{itinerary.likes} Likes</p>
          <p className="text-duration">Duration: {itinerary.duration}hs</p>
          <p className="price-it">Price: ${itinerary.price}</p>
          <p className="hashtags">{itinerary.tags.map(tag => tag)}
          </p>
        </div>
      </div>
      <div className="buttons-it">
        {isOwned &&
          <>
            <button className="button-it">Delete</button>
            <button className="button-it">Edit</button>
          </>
        }
      </div>
      <div className="activities-it">
        {activities && activities.length > 0 ? activities.map(activity => <Activity activity={activity} />) : <p>No activities here...</p>}
      </div>
      <div className="comments-it">
        {comments && comments.length > 0 ? comments.map(comment => <Comment comment={comment} />) : <p>No comments here...</p>}
      </div>
    </div>
  )
}


