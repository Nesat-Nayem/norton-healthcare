import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import ServicesOther from '../ServicesOther/ServicesOther';

// import Vehicles from '../Vehicles/Vehicles';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <Vehicles></Vehicles> */}

            <ServicesOther></ServicesOther>

            <AboutCompany></AboutCompany>
            <Contacts/>
            {/* <Testimonials/> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;