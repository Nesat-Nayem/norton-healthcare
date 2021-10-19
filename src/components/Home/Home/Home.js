import React from 'react';
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
        </div>
    );
};

export default Home;