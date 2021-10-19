import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import ServicesOther from '../ServicesOther/ServicesOther';


import Blog from '../Blog/Blog';



const Home = () => {
    return (
        <div>
            <Header></Header>
         

            <ServicesOther></ServicesOther>

            {/* <AboutCompany></AboutCompany> */}
           
         
       

            <Blog></Blog>

             {/* <Contacts/> */}

            <Footer></Footer>
        </div>
    );
};

export default Home;