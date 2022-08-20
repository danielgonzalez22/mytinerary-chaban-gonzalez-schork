import "../styles/Header.css"
function Header(){
    return(
<div className="header-container">
    <div className="icon">
        <img src="img/suitcase.png" alt="headerIcon" />
    </div>
    <nav>
        <a className="navLink" href="../../public/index.html">Home</a>
        <a className="navLink" href="../../public/index.html">Cities</a>
    </nav>
    <div className="accounts">
        <img src="/img/user.svg" alt="accountIcon" />
    </div>
</div>
    )
}
export default Header