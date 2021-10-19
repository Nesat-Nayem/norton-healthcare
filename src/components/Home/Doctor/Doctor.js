import React, { useEffect, useState } from 'react';


// import BlogCard from '../BlogCard/BlogCard';
import DoctorCard from '../DoctorCard/DoctorCard';



// const Blog = () => {

const Doctor = () => {


   

    // const [Blogs, setBlogs] = useState([]);
    const [Doctors, setDoctors] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        // fetch('./testimonials.json')
        fetch('./doctor.json')

            .then(res => res.json())
            // .then(reviews => console.log(reviews)
          

            // .then(reviews => setBlogs(reviews))
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
                  
                    
                    {/* {
                        Blogs.map(Blog => <BlogCard Blog={Blog}></BlogCard>)
                    } */}

                    {
                        Doctors.map(Doctor => <DoctorCard Doctor={Doctor}></DoctorCard>)
                    }
                </div>
            </div>
        </section>
    );
};


// export default Blog;
export default Doctor;