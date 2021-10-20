import React from 'react';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const {googleSignIn, handleNameChange,handlePasswordChange,isLogin,toggleLogin, handleRegistration,handleEmailChange,error} = useAuth();
    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <form onSubmit={handleRegistration}>
        <h3 className="text-primary mb-5">Please {isLogin ? 'Login' : 'Register'}</h3>
        {!isLogin && <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
          </div>
        </div>}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required  placeholder="Your Email"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required placeholder="Your Password" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label fw-bold " htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Register'}
        </button>

                </form>                  
                    <div className="from-group mt-5">
                        <button onClick={googleSignIn} className="btn btn-primary" ><i class="fab  fa-google"></i>    Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                    <img className="img-fluid" src="https://my.clevelandclinic.org/-/scassets/images/org/hero/home-hero-safe-care.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;