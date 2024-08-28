import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'

const Overview = () => {

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
                        <div className="about-detail-box">
                                <div className="about-card">
                                    <span>Starting At</span>
                                    <h5>70 Cr* Onwards</h5>
                                </div>
                                <div className="about-card2">
                                    <span>Location</span>
                                    <h5>At Sector 54 , Gurgaon</h5>
                                </div>
                                <div className="about-card2">
                                    <span>CONFIGURATIONS</span>
                                    <h5>4 , 5 & 6 BHK APARTMENTS</h5>
                                </div>
                                <div className="about-card">
                                    <span>Status</span>
                                    <h5>New LAUNCH</h5>
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
