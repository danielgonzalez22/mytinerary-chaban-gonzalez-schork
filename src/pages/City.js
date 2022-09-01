import WebsiteLayout from '../layouts/WebsiteLayout'
import '../styles/City.css'

export default function City() {
  return (
    <WebsiteLayout>
      <div className="city-main">
        <div className='city-container'>
          <img src='' alt='city-img'></img>
          <div className='city-details'>
            <ul>
              <li>Name:</li>
              <li>Country:</li>
              <li>Population:</li>
              <li>Foundation:</li>
            </ul>
            <h3>Description</h3>
            <p className='description-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nihil, consectetur molestias autem est earum porro nulla neque sapiente tempora, atque quod quae natus? Voluptates nesciunt sunt id sequi officiis, consequatur impedit, perspiciatis sit, vel ex est quae corrupti mollitia ut necessitatibus a explicabo deleniti repudiandae tempora quo aliquid dolor!</p>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  )
}