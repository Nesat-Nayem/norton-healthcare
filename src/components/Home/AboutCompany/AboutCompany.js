import React from 'react';
import aboutImage from '../../../images/aboutImage.jpg';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCity, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const AboutCompany = () => {
    

    return (
        <section className="my-5 container">
            <div className="row">
                <div className="col-md-5 mb-3">
                    {/* <img className="img-fluid" src={aboutImage} alt="" /> */}
                </div>
                <div className="col-md-6 mb-2">
                    <h4>here is a section we emplement</h4>
                    <h3 className="fw-bolder w-50">yea it come fast</h3>
                    <p>sonn back </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                       
                       
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutCompany;