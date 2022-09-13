// import Activities from "./Activities"
// import Comments from "./Comments"
// import Comments from "./Comment"
// import Activities from "./Activity"
import '../../styles/Itinerary/Itinerary.css'
export default function Itinerary(props) {

  const item = props.items
   return (
    <>
      <p className="name-it">{item.name}</p>
      <div className="container-it">
        <div className="user-it">
          <img src="https://www.cariverplate.com.ar/imagenes/jugadores/2022-08/1498-24-perez-imagenprincipal.png" alt="" className="img-user" />
          <p>`${item.user.name} ${item.user.lastName}`</p>
          <p>enzo123@gmail.com</p>
          <p>Argentina</p>
        </div>
        <div className="main-it">
          <div className="text-it">
            <p>{item.likes} Likes</p>
            <p className="text-duration">Duration: {item.duration}hs</p>
          </div>
          <p className="price-it">Price: ${item.price}</p>
          <p className="hashtags">
            {item.tags.map(tag => tag)}
          </p>
        </div>
        {/* {<Comments itinerary={itinerary._id} />} */}
      </div>
    {/* {<Activities itinerary={itinerary._id} />} */}
    </>
  )
}


