import '../styles/WelcomePage.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
import CitiesCarousel from '../components/CitiesCarousel';
function WelcomePage() {
  return (
    <WebsiteLayout>
      <div className="welcomePage-main-container">
        <h1 className="welcomePage-title">MyTinerary</h1>
        <button className="welcomePage-button">start journey</button>
      </div>
      <CitiesCarousel/>
    </WebsiteLayout>
  );
}
export default WelcomePage;
