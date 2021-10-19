import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = (props) => {
    const { subTitle, Title, description,photoURL } = props.testimonial;

    return (
        <div className="mb-3 col-lg-6 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="card-body">
                    <img className="img-fluid mb-5" src={photoURL} alt="" />

                    <p className="">{subTitle}</p>
                    <h5 className="card-title">{Title}</h5>
                    
                    <p>{description}</p>
                </div>
                <div className="card-footer text-start ">
                <p>Writer: <span className="text-primary">&#64;maria</span></p>
                    
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;