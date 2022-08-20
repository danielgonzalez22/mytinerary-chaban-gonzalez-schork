import '../styles/WelcomePage.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
function WelcomePage() {
  return (
    <>
    <Header/>
    <div className="welcomePage-main-container">
      <h1 className="welcomePage-title">MyTinerary</h1>
      <button className="welcomePage-button">start journey</button>
    </div>
    <Footer/>
    </>
  );
}

export default WelcomePage;
