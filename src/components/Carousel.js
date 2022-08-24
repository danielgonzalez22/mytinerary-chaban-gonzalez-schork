import { useState, useEffect } from "react"
import Arrow from "./Arrow"
import "../styles/Carousel.css"

function Carousel(props) {
  const range = props.range
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const [intervalId, setIntervalId] = useState()
  const items = props.data

  const itemView = (item) => (
    <div className="item">
      <img src={item.url} alt={item.title} className="image-style" />
      <p className="title-city">{item.title}</p>
    </div>
  )

  useEffect(() => {
    let id = setInterval(function () {
      next()
    }, 5000)

    setIntervalId(id)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])

  function previous() {
    if (start >= range) {
      setStart(start - range)
      setEnd(end - range)
    } else {
      setStart(items.length - range)
      setEnd(items.length)
    }
  }

  function next() {
    if (end < items.length) {
      setStart(start + range)
      setEnd(end + range)
    } else {
      setStart(0)
      setEnd(range)
    }
    clearInterval(intervalId)
  }

  return (
    <>
      <div className="subtitle">
        <img src="/img/gummy-polaroid.svg" className='cam-carousel' />
        <h2 className="popular-subtitle">{props.title}</h2>
      </div>
      <div className="cards-container">
        <Arrow icon={"/img/caret-left.svg"} click={previous} />
        <div className="slide">
          {items.slice(start, end).map(itemView)}
        </div>
        <Arrow icon={"/img/caret-right.svg"} click={next} />
        <div className="carousel-buttons">
        </div>
      </div>
    </>
  )
}
export default Carousel