// import Activities from "./Activities"
// import Comments from "./Comments"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/Itinerary/Itinerary.css'
export default function Itinerary(props) {

  const itinerary = props.data
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/users/")
      .then(res => setUsers(res.data.response))
    console.log(users)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //const getUser = () => {
  //let userName = itinerary.user
  //let user = users.find(e => e.name == "Lionel")
  //return user
  //}
  return (
    <>
    <p className="name-it">{itinerary.name}</p>
    <div className="container-it">
      <div className="user-it">
        <img src="https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1498-24-perez-imagenprincipal.png" alt="" className="img-user" />
        <p>Enzo Perez</p>
        <p>enzo123@gmail.com</p>
        <p>Argentina</p>
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
    </>
  )
}


