import React, { useEffect, useState } from 'react';

import DoctorCard from '../DoctorCard/DoctorCard';

const Doctor = () => {

    const [Doctors, setDoctors] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        
        fetch('./doctor.json')

            .then(res => res.json())
                
            .then(reviews => setDoctors(reviews))               
            
         }, [])

    return (
        <section className="my-5 " id="testimonials">
            <div className="container">
            
                <div className="my-5 text-start">
                <h5 className=" fw-bolder">We are achieve the success.</h5>
                <h1 className=" ">Our   & <span style={{ color: '#ff4d30' }}>Specialist</span> Doctors</h1>
                </div>
               
                <div className="row">
                                                  
                    {
                        Doctors.map(Doctor => <DoctorCard Doctor={Doctor}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;