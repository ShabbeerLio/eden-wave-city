import React, { useState } from 'react'
import "./Plans.css"
import floor1 from "../../Assets/Plan/plan1.jpg"
import FormFloat from '../Navbar/FormFloat'

const Plans = () => {

    const [formopen, setFormopen] = useState(false);
    const formIsOpen = () => {
        setFormopen(!formopen);
    };

    const formIsClose = () => {
        setFormopen(false);
    };
    return (
        <div className='Plans'>
            <div className='Plans-main'>
                <h3>Floor Plans & Pricing</h3>
                <div className="plans-box">
                    <div className="plans-card">
                        <img src={floor1} alt="GODREJ JARDINIA Sector 146" />
                        <div className="plans-card-title" onClick={formIsOpen} >
                            <p>3BHK Type 3</p>
                            <p>1774 Sq.ft.</p>
                            <h5>@ ₹ 1.41 Cr*</h5>
                            <div className="plan-card-btn">
                                <p>Request Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="plans-card">
                        <img src={floor1} alt="GODREJ JARDINIA NOIDA" />
                        <div className="plans-card-title" onClick={formIsOpen} >
                            <p>3BHK Type 4</p>
                            <p>1750 Sq.ft.</p>
                            <h5>@ ₹ 1.40 Cr*</h5>
                            <div className="plan-card-btn">
                                <p>Request Now</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {formopen && (
                <>
                    <FormFloat formIsClose={formIsClose} />
                </>
            )}
        </div>
    )
}

export default Plans
