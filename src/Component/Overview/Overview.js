import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import imag1 from "../../Assets/CAtegory/Warehouse-Gym_17f1c9ca3a7_large.jpg"
import imag2 from "../../Assets/CAtegory/Kids Play Area.jpeg"
import imag3 from "../../Assets/CAtegory/SeniorCitizens.jpg"
import imag4 from "../../Assets/CAtegory/Flower Garden.jpg"
import imag5 from "../../Assets/CAtegory/Jogging.jpeg"
import imag6 from "../../Assets/CAtegory/Salon.jpeg"
import imag7 from "../../Assets/CAtegory/CCTV Surveillance.jpeg"
import imag8 from "../../Assets/CAtegory/24X7 Security.jpg"
import imag9 from "../../Assets/CAtegory/Swimming Pool.jpg"
import imag10 from "../../Assets/CAtegory/banquet.jpg"
import imag11 from "../../Assets/CAtegory/badminton.jpeg"
import imag12 from "../../Assets/CAtegory/Pharmacy.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                            <Form />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>This wiki is developed for DLF Andheri Mumbai, an elite residential development project developed in Mumbai. This new modern complex brings prestige, elegance, comfort and all the amenities required in today’s societies.</p>
                            <p>Specially developed to fulfill the requirements of the modern city inhabitants, DLF Andheri Mumbai is developed to offer customers only the highest quality of living, completed with state-of-the-art options that may be accessed 24/7.</p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={imag1} alt="DLF Andheri Mumbai" />
                                    <p>Fully Equipped Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag2} alt="DLF Andheri Mumbai" />
                                    <p>Kids Play Area</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag3} alt="DLF Andheri Mumbai" />
                                    <p>Senior Citizens’ Pavilion</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag4} alt="DLF Andheri Mumbai" />
                                    <p>Flower Garden</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag5} alt="DLF Andheri Mumbai" />
                                    <p>Jogging/Walking Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag6} alt="DLF Andheri Mumbai" />
                                    <p>Salon/Spa</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag7} alt="DLF Andheri Mumbai" />
                                    <p>CCTV Surveillance</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag8} alt="DLF Andheri Mumbai" />
                                    <p>24X7 Security</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag9} alt="DLF Andheri Mumbai" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag10} alt="DLF Andheri Mumbai" />
                                    <p>Multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag11} alt="DLF Andheri Mumbai" />
                                    <p>Badminton Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={imag12} alt="DLF Andheri Mumbai" />
                                    <p>Pharmacy</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
