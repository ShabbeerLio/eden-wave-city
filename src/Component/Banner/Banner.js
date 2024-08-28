import React from 'react'
import bannerimg from "../../Assets/Banner/banner.png"
import "./Banner.css"

const Banner = () => {

    return (
        <>
            <div className="banner">
                <div className="banner-image">
                    <img src={bannerimg} alt="DLF Andheri Mumbai" />
                </div>
                <div className="banner-stick">
                    <div className="banner-stick-box">
                        <span>New Launch</span>
                        <h2>DLF Camellias 2</h2>
                        <h5>At Sector 39, Gurgaon</h5>
                        <h5>Stunning architecture influenced by the timeless elegance of European design.</h5>
                        <p>Premium 4 , 5 & 6 BHK Residence | Price Starts <span> ₹ 70 Cr*</span> </p>
                        {/* <p>Possession in December 2028</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
