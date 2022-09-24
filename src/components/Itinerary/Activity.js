import '../../styles/Itinerary/Activity.css'
export default function Activities(props) {
  let activity = props.activity
  return (
    <div className="activity-item" key={activity.name} style={{ backgroundImage: `url(${activity.photo})` }}>
      <p className="activity-item-name">{activity.name}</p>
    </div>
  )
}