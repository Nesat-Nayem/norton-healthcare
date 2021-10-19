import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {id} = useParams();
    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const ExactIteam = data.filter(td => td._id === id);

    
    return (
        <div className="container">
            <h1 className="text-center my-5">Explore Details </h1>
            <div className="container mb-5 col-lg-10 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded ServicsCard text-start">



            
            <img src={ExactIteam[0]?.imageURL} alt="" />
            <h3 className="text-start ms-5">{ExactIteam[0]?.name}</h3>
           
            <p className="text-start w-75 ms-5">{ExactIteam[0]?.description}</p>
            

            </div>

            </div>
        </div>
    );
};

export default ServiceDetail;