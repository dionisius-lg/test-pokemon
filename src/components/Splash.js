import { Link as ScrollLink, Element } from "react-scroll";

const splash = () => {
    return (
        <Element id="Section-Splash">
            <div className="splash-container" id="Home">
                <div className="splash text-center">
                    <h1 className="splash-head text-uppercase">{process.env.REACT_APP_NAME} Database</h1>
                    <p>
                        <ScrollLink
                            className="pure-button button-dark text-uppercase"
                            to="Section-Content"
                            spy={true}
                            smooth={true}
                            offset={550}
                            duration={400}
                        >Get Started</ScrollLink>
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default splash
