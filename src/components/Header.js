import {  Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
    return (
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <Link to="/" className="pure-menu-heading">{process.env.REACT_APP_NAME}</Link>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <ScrollLink
                            className="pure-menu-link"
                            activeClass="pure-menu-selected"
                            to="Section-Splash"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={400}
                        >Home</ScrollLink>
                    </li>
                    <li className="pure-menu-item">
                        <ScrollLink
                            className="pure-menu-link"
                            activeClass="pure-menu-selected"
                            to="Section-Content"
                            spy={true}
                            smooth={true}
                            offset={550}
                            duration={400}
                        >Monsters</ScrollLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
