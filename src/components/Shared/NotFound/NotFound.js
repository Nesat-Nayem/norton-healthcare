import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <h1 className="text-center">404</h1>
            <h1 className="text-center"> Oops! That page can’t be found.</h1>
            <br /> <br/>
            <Link to="/home"><button className="btn btn-lg bg-Primary margin">Go to home</button></Link>
        </div>
    );
};

export default NotFound;