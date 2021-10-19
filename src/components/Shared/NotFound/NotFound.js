import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <h1> Oops! That page can’t be found.</h1>
            
            <Link to="/home"><button className="btn btn-lg bg-primary">Go to home</button></Link>
        </div>
    );
};

export default NotFound;