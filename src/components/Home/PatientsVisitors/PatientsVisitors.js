import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const PatientsVisitors = () => {
   
        const[campuse,setCampus]= useState([])

        useEffect(()=>{
            fetch('pationts.json')
            .then(res=>res.json())
            .then(data=>setCampus(data.campus))
        },[])
        return (
            <div className="container">
                <img className="img-fluid" src="https://wphospital.org/App_Themes/WPHRedesign/images/img11.jpg" alt="" />
    
                <div>
                    <h1 className="m-2 mainText p-5 text-success">We Find out Our patients History To Use Our Work Motivation And Speed More Then Fast. We listen there So Much Lovely And sincerely</h1>
    
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

                            <p className="btn text-primary">rede more <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></p>
                             </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    </div>
    
                </div>
            </div>
        );
};

export default PatientsVisitors;