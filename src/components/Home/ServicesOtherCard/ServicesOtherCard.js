import React from 'react';
import { useHistory } from 'react-router';
import { Link} from 'react-router-dom';
import './ServicesOtherCard.css'

const ServicesOtherCard = (props) => {
    const { name, imageURL,shortdes, _id } = props.ServicesOther;
    // let history = useHistory();

    // const bookVehicle = (id) => {

    //     history.push(`/bookVehicle/${id}`)
    // }
    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={imageURL} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{shortdes}</p>
                    <Link to={`/bookVehicle/${_id}`}>
                            <h6 className="btn margin">View Details <i class="fas fa-chevron-right margin"></i><i class="fas fa-chevron-right margin"></i> </h6>
                        </Link>
                </div>
             
            </div>
        </div>
    );
};

export default ServicesOtherCard;