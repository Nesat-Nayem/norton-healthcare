import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AdvancedTechnologies = () => {
   
        const[campuse,setCampus]= useState([])

        useEffect(()=>{
            fetch('technologies.json')
            .then(res=>res.json())
            .then(data=>setCampus(data.Technologies))
        },[])
        return (
            <div className="container">
                <img className="img-fluid" src="https://i.ibb.co/DGRP1YM/12.jpg" alt="" />
    
                <div>
                    <h1 className="m-2 text-center mainText p-5 text-success">We Foockus All Time Latest Technology</h1>
    
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

export default AdvancedTechnologies;