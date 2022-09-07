import "../styles/CityCard.css"
import { Link as LinkRouter } from 'react-router-dom'

export default function CityCard(props) {

  return (
    <div className="card">
      <img src={props.image} alt="" className="card-img"/>
      <p className="card-title">{props.title}</p>
      <LinkRouter to={`/City/${props.id}`}><button className="card-button" type="">See more...</button></LinkRouter>
    </div>
  )
}