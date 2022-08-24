import '../styles/WelcomePage.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import CitiesCarousel from '../components/CitiesCarousel';
import CallToAction from '../components/CallToAction';
function WelcomePage() {
  return (
    <WebsiteLayout>
      <div className="welcomePage-main-container">
        <div className='incio-look'>
          <div className="main-text">
            <h1 className="welcomePage-title"><span className='my-style'>My</span>Tinerary</h1>
            <p className='slogan-main'>Find your perfect trip, designed by insiders who know and love their cities!</p>
          </div>
          <div className='main-bag'>
            <img src="/img/gummy-travel-bag.svg" className='mochila-inicio' />
          </div>
        </div>
        <CallToAction />
        <div className='dotted-line'>
        </div>
      </div>
      <CitiesCarousel />
    </WebsiteLayout>
  );
}
export default WelcomePage;
