import '../../styles/Itinerary/Activity.css'
export default function Activities(props) {
  let activity = props.activity
  return (
    <>
      <div className="activities-container">
        <div className="activities-item" key={activity.name} style={{ backgroundImage: `url(${activity.photo})`}}>
          <p className="activities-item-name">{activity.name}</p>
        </div>
      </div>
    </>
  )
}