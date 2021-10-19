import React, { useEffect, useState } from 'react';
import ServicesOtherCard from '../ServicesOtherCard/ServicesOtherCard';

const ServicesOther = () => {

    const [ServicesOther, setServicesOther] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
             
                setServicesOther(data);
            })
    }, [])
    return (
        <section id="book-ride" className="mt-5 container">
          
            <h2 className="fw-bolder my-5 text-info">Medical Services</h2>
           
            <div className="row">
                {
                   
                    ServicesOther.map(ServicesOther => <ServicesOtherCard ServicesOther={ServicesOther}></ServicesOtherCard>)
                }
            </div>
        </section>
    );
};

export default ServicesOther;