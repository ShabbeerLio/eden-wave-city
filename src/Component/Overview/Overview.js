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
                            <p>Eden Wave City is a well-planned apartment complex located in the vast master planned and digital city of Wave City in Ghaziabad. Situated on acres of apple-green landscape with a richly designed infrastructural structure, Eden Wave City furnishes a new-age living opportunity of comfort, luxury, and conservation. </p>
                            <p>Licensed by state-of-the-art infrastructure, optimum location, and advanced architectural design, Eden Wave City represents the direction of ideal living standards for families and professionals. Eden Wave City is a potential area for buying property in NCR.</p>
                        </div>
                        <div className="about-detail-box">
                                <div className="about-card">
                                    <span>Starting At</span>
                                    <h5>1.40 Cr* Onwards</h5>
                                </div>
                                <div className="about-card2">
                                    <span>Location</span>
                                    <h5>At NH 24, Ghaziabad</h5>
                                </div>
                                <div className="about-card2">
                                    <span>CONFIGURATIONS</span>
                                    <h5>3 BHK APARTMENTS</h5>
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
