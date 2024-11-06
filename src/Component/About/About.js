import React from 'react'
import "./About.css"
import Aboutimg from "../../Assets/About/about.jpg"
import { Link } from 'react-router-dom'

const About = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    }

    return (
        <div className="aboutUs">
           
            <div className="about-main">
                <div className="about-items">
                    <div className="about-left">
                    <div className="about-title">
                        <h3>About</h3>
                    </div>
                        <div className="about-detail">
                            {/* <h3>FAIRFOX EON NOIDA, Sector 140 Noida Expressway</h3> */}
                            <p>Eden Wave City we believe that a home is much more than walls around it; it is a place where everyday Ghaziabad, our residence plan intends life to be picturesque. Situated in the innovative Wave City Township in Ghaziabad, our residence plan intends to bring in a fashionable housing paradigm. While incorporating sustainability, smart city technologies, and a strong community feel, Eden Wave City combines the benefits of being a streamlined city within easy reach of a serene environment.</p>
                            <p>We have planned the Apartments tactfully so that they start from 2BHK to lavish 3BHK Homes that present a sensationally upscale living in terms of aesthetics and facilities. People get numerous amenities such as landscaped lawns, brand-new gyms, spaces for children, round-the-clock security service, and many more, which pleasant life here, not just comfortable, but extraordinary.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/eden/site-visit" onClick={toTop}>
                                <p>Interested in Site Visit ?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="about-right">
                        <img className="image2" src={Aboutimg} alt="DLF Andheri Mumbai" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
