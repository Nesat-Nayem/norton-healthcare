import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const LocationsDirections = () => {
    // return (
    //     <div>
    //         <h1>this is location and deraction</h1>
    //     </div>
    // );

    // // here is start

    const[campuse,setCampus]= useState([])

    useEffect(()=>{
        fetch('location.json')
        .then(res=>res.json())
        .then(data=>setCampus(data.campus))
    },[])
    return (
        <div className="container">
            <img className="img-fluid" src="https://ssmc.ae/assets/uploads/2019/10/top-slider3.png" alt="" />

            <div>
                <h1 className="m-2 mainText p-5">Find Your Nearest Locations Our Hospital Because We Offer World Fast Class Hospital facility</h1>



            {/* campus card area */}

            <div>
                <div className="row">
                {campuse?.map((campuses) => (
                    <div key={campuses.id} className="col-md-6">
                    <div className="card">
                        <div className="">
                        <img className="img-fluid card-img-top" src={campuses.picture} alt="" />
                        </div>
                        <div className="card-body">
                        <h5 className="text">{campuses.title}</h5>
                        <p>{campuses.discription}</p>

                        <p className="btn text-primary">Explore More <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></p>
                         </div>
                    </div>
                    </div>
                ))}
                </div>
                </div>

            {/* campus card area */}

            </div>
        </div>
    );

    // here is start
};

export default LocationsDirections;