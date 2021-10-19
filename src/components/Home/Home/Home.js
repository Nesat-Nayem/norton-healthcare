import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import ServicesOther from '../ServicesOther/ServicesOther';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            <Header></Header>
         

            <ServicesOther></ServicesOther>

            {/* <AboutCompany></AboutCompany> */}
           
         
            <Testimonials></Testimonials>

             {/* <Contacts/> */}

            <Footer></Footer>
        </div>
    );
};

export default Home;