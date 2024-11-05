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
                            <p>DLF Camellias 2 forms part of the ultra-exclusive DLF Golf Course community, sprawled over hundreds of acres of greenery and open spaces. The project consists of ultra-luxurious apartments designed to offer complete comfort and privacy. The buildings are truly modern and aesthetic in every way, with each apartment offering a panoramic view of the DLF Golf and Country Club.</p>
                            <p>It has a peaceful and secure atmosphere, modern facilities, and amenities required by today's families. Ideally set, this project caters to the needs of professionals, families, and retirees by providing proximity to major business houses, shopping areas, and quality educational institutions.</p>
                        </div>
                        <div className="about-detail-box">
                                <div className="about-card">
                                    <span>Starting At</span>
                                    <h5>70 Cr* Onwards</h5>
                                </div>
                                <div className="about-card2">
                                    <span>Location</span>
                                    <h5>At Sector 54, Gurugram</h5>
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
