import "../styles/Footer.css"
import {Link as LinkRouter} from 'react-router-dom'

function Footer(){
    return(
<div className="footer-container">
    <h4>MindHub 2022 </h4>
    
    <div className="footer-nav">
        <h4>Navigate</h4>
        <LinkRouter to='/' className="navLink">Home</LinkRouter>
        <LinkRouter to='/Cities' className="navLink">Cities</LinkRouter>
        <LinkRouter to='/NewCity' className="navLink">NewCity</LinkRouter>
        
    </div>
    <div className="metodos-pago-footer">
        <h4>Payment Methods:</h4>
        <img src="/img/metodosdepago.png" alt="instagramIcon" className="metodos-style-footer"/>
    </div>
    <div className="copyright-container">
        <p>Copyright © - MYTINERARY All Rights Reserved.</p>
        <div className="redes-sociales-footer">
        <img src="/img/facebook.svg" alt="facebookIcon" className="socials"/>
        <img src="/img/whatsapp.svg" alt="whatsappIcon" className="socials"/>
        <img src="/img/instagram.svg" alt="instagramIcon" className="socials"/>
    </div>
    </div>
</div>
    )
}
export default Footer