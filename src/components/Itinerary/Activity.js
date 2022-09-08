//import "../../styles/itinerary/Activities.css"
import { useGetItineraryActivitiesQuery } from "../../features/actions/activitiesApi"

export default function Activities(props) {

    let id = props.itinerary

    let {
        data: activities,
        isLoading,
        isSuccess,
    } = useGetItineraryActivitiesQuery(id)

    if (isLoading) {
        activities = []
    } else if (isSuccess) {
        activities = activities.response
    }

    const viewActivity = (activity) => {
        return (
            <div className="activities-item" key={activity.name} style={{ backgroundImage: `url(${activity.photo})` }}>
                <p className="activities-item-name">{activity.name}</p>
            </div>
        )
    }
    return (
        <>
            {activities ?
                <div className="activities-container">
                    {activities?.response?.map(viewActivity)}
                </div> : null}
        </>
    )
}