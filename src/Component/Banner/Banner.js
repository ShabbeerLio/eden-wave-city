import React from 'react'
import bannerimg from "../../Assets/Banner/banner.jpg"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="DLF" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>Eden Wave City</h2>
                        <h5>At NH 24, Ghazaibad</h5>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        <p>Premium 3 BHK Residence | Price Starts <span> ₹ 1.40 Cr*</span> </p>
                        {/* <p>Possession in December 2028</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
