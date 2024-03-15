import react from "react";
import logo from "../../assets/logo/SJ_LOGO-1.png"
import '../Header/Header.scss';


const Header = () => {

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="navLogo">
                    <img className="logo" src={logo} alt="makerpalz"/>
                </div>
                <ul className="navList">
                    <li className="list">About</li>
                    <li className="list">Contact Us</li>
                </ul>
            </nav>

        </header>
    )
}

export default Header