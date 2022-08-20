import "../styles/Footer.css"

function Footer(){
    return(
<div className="footer-container">
    <h3>MindHub 2022 </h3>
    <div className="redes-sociales-footer">
        <img src="/img/facebook.svg" alt="facebookIcon"/>
        <img src="/img/whatsapp.svg" alt="whatsappIcon"/>
        <img src="/img/instagram.svg" alt="instagramIcon"/>
    </div>
    <div className="metodos-pago-footer">
        <h3>Metodos de Pago</h3>
        <img src="/img/metodosdepago.png" alt="instagramIcon" className="metodos-style-footer"/>
    </div>
</div>
    )
}
export default Footer