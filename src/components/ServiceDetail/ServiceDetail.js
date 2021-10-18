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
        <div>
             <img src={ExactIteam[0]?.imageURL} alt="" />
            <h1>This is service Detail Page </h1>
            <h3>Name : {ExactIteam[0]?.name}</h3>
            <h3>price : {ExactIteam[0]?.price}</h3>
            <h3>description : {ExactIteam[0]?.description}</h3>
            <h3>chek:{ExactIteam[0]?.my}</h3>
        </div>
    );
};

export default ServiceDetail;