import React, {useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/ScrollToTop.css"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }, [pathname])

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
        <button className='scroll-to-top' onClick={goToTop}>Scroll to Top</button>
  )
}


//import React, {useState, useEffect} from 'react'
//const [showTopBtn, setShowTopBtn] = useState(false)
// useEffect(() => {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 400) {
//       setShowTopBtn(true);
//     } else {
//       setShowTopBtn(false);
//     }
//   });
// }, [])
// return (
//   <div>
//     {" "}
//     {showTopBtn && (
//       <button onClick={goToTop}>Scroll to Top</button>
//     )} {" "}
//   </div>
// )
export default ScrollToTop