import "../styles/CityCard.css"

export default function CityCard(props) {

  return (
    <div className="card">
      <img src={props.image} alt="" className="card-img"/>
      <p className="card-title">{props.title}</p>
      <button className="card-button" type="">See more...</button>
    </div>
  )
}