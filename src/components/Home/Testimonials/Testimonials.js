import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        fetch('./testimonials.json')
            .then(res => res.json())
            .then(reviews => console.log(reviews)
            //     {
            //     setTestimonials(reviews);
            // }
            )
    }, [])

    return (
        <section className="my-5 bg-light" id="testimonials">
            <div className="container">
                <p className="text-center fw-bolder">doing somethis</p>
                <h1 className="text-center">fasion'<span style={{ color: '#ff4d30' }}>we doing</span></h1>
                <p className="text-center text-success ">this is text place</p>
               
                
                
                <div className="row">
                    {
                        testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;