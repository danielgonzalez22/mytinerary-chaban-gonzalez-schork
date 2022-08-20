import "../styles/Carousel.css"
function Carousel(props) {
  const start = 0
  const range = 4
  const end = start + range
const items = props.data
  
  const itemView = (item) => (
    <div className="item">
      <img src={item.url} alt={item.title} />
      <p>{item.title}</p>
    </div>
  )
  return (
    <>
      <div className="slide">
        {items.slice(start, end).map(itemView)}
      </div>
    </>
  )
}
export default Carousel