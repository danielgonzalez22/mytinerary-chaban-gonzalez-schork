import { useState } from "react"
import Arrow from "./Arrow"
import "../styles/Carousel.css"

function Carousel(props) {
  const range = props.range
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const items = props.data
  const itemView = (item) => (
    <div className="item">
      <img src={item.url} alt={item.title} className="image-style" />
      <p className="title-city">{item.title}</p>
    </div>
  )

  function previous() {
    if (start >= range) {
      setStart(start - range)
      setEnd(end - range)
    }
  }

  function next() {
    if (end < items.length) {
      setStart(start + range)
      setEnd(end + range)
    }
  }

  return (
    <>
      <div className="slide">
        <h2 className="popular-subtitle">{props.title}</h2>
        <Arrow icon={"<"} click={previous} />
        {items.slice(start, end).map(itemView)}
        <Arrow icon={">"} click={next} />
      </div>
      <div className="carousel-buttons">
      </div>
    </>
  )
}
export default Carousel