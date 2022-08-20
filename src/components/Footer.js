import "../styles/Footer.css"

function Footer(){
    return(
<div className="footer-container">
    <h4>MindHub 2022 </h4>
    <div className="redes-sociales-footer">
        <img src="/img/facebook.svg" alt="facebookIcon" className="socials"/>
        <img src="/img/whatsapp.svg" alt="whatsappIcon" className="socials"/>
        <img src="/img/instagram.svg" alt="instagramIcon" className="socials"/>
    </div>
    <div className="metodos-pago-footer">
        <h4>Payment Methods:</h4>
        <img src="/img/metodosdepago.png" alt="instagramIcon" className="metodos-style-footer"/>
    </div>
    <div className="copyright-container">
        <p>Copyright © - MYTINERARY All Rights Reserved.</p>
    </div>
</div>
    )
}
export default Footer