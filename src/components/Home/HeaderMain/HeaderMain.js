import React from 'react';
// import carBanner from '../../../images/banner_car.png'
const HeaderMain = () => {
    return (
        // <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
        //     <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">
        //         <p>Plan your trip now</p>
        //         <h1>Save <span style={{color:'#ff4d30'}}>big</span> with our <br/> car rental</h1>
        //         <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci perferendis fuga officia dicta, voluptatem provident!</p>
        //         <a href="#book-ride" style={{backgroundImage: 'linear-gradient(to left,#f0561d,#fff,#ff6830,#f0561d)'}} className="btn btn-lg fw-bolder">Book Ride</a>
        //     </div>
        //     <div className="col-md-12 col-lg-6">
        //         <img src={carBanner} alt="" className="img-fluid w-100"/>
        //     </div>
        // </main>

            // carosel here

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://i.ibb.co/bKpcsYd/imaj-1.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://i.ibb.co/G07xyk5/slider-img-1.jpg" class="d-block w-100" alt="..."/>
                </div>
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        
    );
};

export default HeaderMain;