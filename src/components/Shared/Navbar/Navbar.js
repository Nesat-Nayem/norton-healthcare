import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import carLogo from '../../../images/654.jpg'

const Navbar = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                       
                        <h1 className="navbar-brand">Northon helthcare</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

                            <Link to="/home" className="nav-link">Home</Link>
                            <Link to="/service" className="nav-link">Services</Link>
                            
                          
                           
                                 <Link to="/Contect" className="nav-link">Contact</Link>


                            { user.email?
                                <Link to="/login">
                                <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                                </Link>
                                :
                                <Link to="/login">
                                <button className="btn btn-warning me-2" >Log In</button>
                                </Link>

                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;