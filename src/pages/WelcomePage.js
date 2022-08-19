import '../styles/WelcomePage.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
function WelcomePage() {
  return (
    <>
    <Header/>
    <div className="WelcomePage-main-container">
      <h1 className="WelcomePage-title">MyTinerary</h1>
      <button className="WelcomePage-button">start journey</button>
    </div>
    <Footer/>
    </>
  );
}

export default WelcomePage;
