// import "../../styles/Itinerary/Itinerary.css"
// import Activities from "./Activities"
// import Comments from "./Comments"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Itinerary(props) {
    const itinerary = props.data
    const [users, setUsers] = useState([]) 
    const creator = itinerary.user
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/users/")
          .then(res => setUsers(res.data.response));
          // eslint-disable-next-line react-hooks/exhaustive-deps
          console.log(getUser())
      }, [])
      const getUser = ()=>{
        let user = users.filter(e => creator.includes(e.name))
    
        return user
      }
    return (
        <div className="container-it">
            <p className="name-it">{itinerary.name}</p>
            <div className="user-it">
                <img src={user.photo} alt="" className="user-img" />
                <p>{user.name}</p>
                <p>{user.mail}</p>
            </div> 
            <div className="main-it">
                <div className="text-it">
                <p>{itinerary.likes} Likes</p>
                <p className="text-duration">Duration: {itinerary.duration}hs</p>
                </div>
                <p className="price-it">Price: ${itinerary.price}</p>
                <p className="hashtags">
                    {itinerary.tags.map(tag => tag)}
                </p>
            </div>
            {/* <Activities itinerary={itinerary._id} />
            <Comments itinerary={itinerary._id}/> */}
        </div>
    )
}


