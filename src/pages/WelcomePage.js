import '../styles/WelcomePage.css';
import WebsiteLayout from '../layouts/WebsiteLayout';
function WelcomePage() {
  return (
    <WebsiteLayout>
      <div className="welcomePage-main-container">
        <h1 className="welcomePage-title">MyTinerary</h1>
        <button className="welcomePage-button">start journey</button>
      </div>
    </WebsiteLayout>
  );
}
export default WelcomePage;
