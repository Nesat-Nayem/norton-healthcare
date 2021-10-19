import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutCompany from '../AboutCompany/AboutCompany';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import ServicesOther from '../ServicesOther/ServicesOther';


import Blog from '../Blog/Blog';
import Doctor from '../Doctor/Doctor'



const Home = () => {
    return (
        <div>
            <Header></Header>
         

            <ServicesOther></ServicesOther>

           
            <Blog></Blog>

            
            <Doctor></Doctor>

            

            <Footer></Footer>
        </div>
    );
};

export default Home;