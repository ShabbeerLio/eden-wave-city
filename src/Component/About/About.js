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
                            <p>DLF Andheri Mumbai is a brand newly launched ultra-luxury residences that offer lavish 2 BHK and 3 BHK homes with futuristic measures and modern features. The project is helmed by the notable real estate developer DLF Group with an aim to provide lavish living space for the discerning elite few.</p>
                            <p>Check out the high life from DLF Andheri Mumbai. These attributes accompanied by an excellent location, fabulous and luxurious facilities, and a rich program of a maisonette lifestyle makes this project an ideal choice for living. Live the easy, comfortable and thrilling life ever and face a new challenge each new day.</p>
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
