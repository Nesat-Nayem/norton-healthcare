import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        fetch('./testimonials.json')
            .then(res => res.json())
            // .then(reviews => console.log(reviews)
            .then(reviews => setTestimonials(reviews))
            
                
            
    }, [])

    return (
        <section className="my-5 " id="testimonials">
            <div className="container">
              
                {/* <p className="text-center text-success ">this is text place</p> */}
                <div className="my-5">
                <h5 className="text-center fw-bolder">Blogs</h5>
                <h1 className="text-center">Recent News & <span style={{ color: '#ff4d30' }}>Advices</span></h1>
                </div>
               
                
                
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