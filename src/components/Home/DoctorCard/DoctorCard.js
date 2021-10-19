import React from 'react';

const DoctorCard = (props) => {

    const { name,positon, photoURL } = props.Doctor;

    return (
        <div className="mb-3 col-lg-4 col-sm-6">
            <div className="card shadow-lg w-100 h-100 text-center rounded">
                <div className="card-body text-start">
                    <img className="img-fluid mb-5" src={photoURL} alt="" />
                   
                    <h3 className="card-title">{name}</h3>
                    
                    <h6>{positon}</h6>
                </div>
                
            </div>
        </div>
    );
};

export default DoctorCard;