import React from 'react';
import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/UseAuth';


const Navbar = () => {
   
    // const {logOut, user} = useAuth();
    // console.log(user);

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex">
                       
                        <h1 className="navbar-brand">Norton Helthcare</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">

            {/* nav link area */}

                            <Link to="/service" className="nav-link">About us</Link>

                            <Link to="/home" className="nav-link">Vehicles</Link>
                           
                            <Link to="/home" className="nav-link">Contact</Link>

                {/* login log out area */}
                           
                         
                                <Link to="/login">
                                <button  className="btn btn-warning me-2" >Log-out</button>
                                </Link>
                              
                                <Link to="/login">
                                <button className="btn btn-warning me-2" >Log In</button>
                                </Link>

                         
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;