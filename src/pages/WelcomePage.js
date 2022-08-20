import '../styles/WelcomePage.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import CitiesCarousel from '../components/CitiesCarousel';
import CallToAction from '../components/CallToAction';
function WelcomePage() {
  return (
    <WebsiteLayout>
      <div className="welcomePage-main-container">
        <h1 className="welcomePage-title">MyTinerary</h1>
        <p className='slogan-main'>Find your perfect trip, designed by insiders who know and love their cities!</p>
        <CallToAction/>
      </div>
      <CitiesCarousel/>
    </WebsiteLayout>
  );
}
export default WelcomePage;
