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
                            <p>DLF Camellias 2 is a luxury residential project located at the heart of Gurgaon. It has the ideal blend of luxury, comfort, and contemporary lifestyle. DLF is among the top names when it comes to real estate business houses, so this project will surely mark a change in the definition of luxury living since one can enjoy spacious apartments with world-class amenities and a serene environment. </p>
                            <p>Located in Sector 42, Gurgaon, DLF Camellias 2 overlooks the surroundings with panache, hence becoming a haven for people desiring a serene and sophisticated lifestyle. The development offers a perfect example of how every small detail can be just right to offer the best standards of living in style and luxury.</p>
                        </div>
                        <div className="about-button">
                            <Link to="/site-visit" onClick={toTop}>
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
