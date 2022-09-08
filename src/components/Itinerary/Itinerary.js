// import Activities from "./Activities"
// import Comments from "./Comments"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/Itinerary/Itinerary.css'
export default function Itinerary(props) {
    
    const itinerary = props.data
    const [users, setUsers] = useState([]) 
    const creator = itinerary.user
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/users/" )
        .then(res => setUsers(res.data.response));
          // eslint-disable-next-line react-hooks/exhaustive-deps
        getUser()
      }, [])
      console.log(users)
      const getUser = ()=>{
        let user = users.filter(e => setUser(creator.includes(e.name)))
    console.log(user)
      }
    return (
        <div className="container-it">
            <div className="user-it">
            <p className="name-it">{itinerary.name}</p>
                <img src={user.photo} alt="" className="user-img" />
                <p>{user.name}</p>
                <p>{user.mail}</p>
                <p>Enzo Perez</p>
                <img className="img-user" src="https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1498-24-perez-imagenprincipal.png" />
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
            {/* <Activities /> */}
            {/* <Comments /> */}
        </div>
    )
}


