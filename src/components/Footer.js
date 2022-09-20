import "../styles/Footer.css"
import {Link as LinkRouter} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";
import ActualYear from "./ActualYear";

function Footer(){
    return(
<div className="footer-container">
    <div className="half-footer">
        <div className="footer-nav">
        <h4>Navigate</h4>
        <LinkRouter to='/' className="navLink">Home</LinkRouter>
        <LinkRouter to='/Cities' className="navLink">Cities</LinkRouter>
        <LinkRouter to='/NewCity' className="navLink">NewCity</LinkRouter>
        <LinkRouter to='/EditCity' className="navLink">EditCity</LinkRouter>
        
        </div>
        <ScrollToTop/> 
    </div>
    <div className="other-half-footer">
    <div className="socials-footer">
        <h4>Socials:</h4>
        <img src="/img/facebook.svg" alt="facebookIcon" className="socials"/>
        <img src="/img/whatsapp.svg" alt="whatsappIcon" className="socials"/>
        <img src="/img/instagram.svg" alt="instagramIcon" className="socials"/>
    </div>
    </div>
    <div className="copyright-container">
        <p>Copyright © - MYTINERARY All Rights Reserved.</p>
        <p>MindHub {<ActualYear/>}</p>
    </div>
</div>
    )
}
export default Footer