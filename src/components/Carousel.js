import "../styles/Carousel.css"
function Carousel(props) {
  const start = 0
  const range = 4
  const end = start + range
const items = props.data
  
  const itemView = (item) => (
    <div className="item">
      <img src={item.url} alt={item.title} className = "image-style"/>
      <p className="title-city">{item.title}</p>
    </div>
  )
  return (
    <>
      <div className="slide">
        <h2 className="popular-subtitle">{props.title}</h2>
        {items.slice(start, end).map(itemView)}
      </div>
    </>
  )
}
export default Carousel