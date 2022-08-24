import "../styles/Footer.css"
import {Link as LinkRouter} from 'react-router-dom'
import ScrollToTop from "./ScrollToTop";

function Footer(){
    return(
<div className="footer-container">
    <div className="half-footer">
        <div className="footer-nav">
        <h4>Navigate</h4>
        <LinkRouter to='/' className="navLink">Home</LinkRouter>
        <LinkRouter to='/Cities' className="navLink">Cities</LinkRouter>
        <LinkRouter to='/NewCity' className="navLink">NewCity</LinkRouter>
        </div>
        <ScrollToTop/> 
    </div>
    <div className="other-half-footer">
    <div className="metodos-pago-footer">
        <h4>Payment Methods:</h4>
        <img src="/img/metodosdepago.png" alt="instagramIcon" className="metodos-style-footer"/>
    </div>
    <div className="redes-sociales-footer">
        <h4>Socials:</h4>
        <img src="/img/facebook.svg" alt="facebookIcon" className="socials"/>
        <img src="/img/whatsapp.svg" alt="whatsappIcon" className="socials"/>
        <img src="/img/instagram.svg" alt="instagramIcon" className="socials"/>
    </div>
    </div>
    <div className="copyright-container">
        <p>Copyright © - MYTINERARY All Rights Reserved.</p>
        <p>MindHub 2022</p>
    </div>
</div>
    )
}
export default Footer