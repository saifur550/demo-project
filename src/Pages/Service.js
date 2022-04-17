import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope , faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Service = ({ service }) => {
    const { key, img, title, desc ,specialist ,hospital } = service;
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 service">
                <div className="card-deck mb-5  ">
                    <div className="card box-shadow">
                        <img className="card-img-top" src={img} alt="pic" />
                        <div className="card-body  pt-3">
                            <h5 className="card-title fw-bold  service-title">{title}</h5>
                            <p className="card-text para text-muted">{desc}</p>
                            <div className="mb-4">
                                <p className="text-primary fw-bold">
                                <span className="margin-right">
                                    <FontAwesomeIcon icon={faStethoscope} />  
                                    </span>
                                 SPECIALTIES : <span className=" text-dark"> {specialist}</span>
                                </p>

                                <p className="text-primary fw-bold">
                                    <span className="margin-right">
                                    <FontAwesomeIcon icon={faClinicMedical} />  
                                    </span>
                                    Hosptial : <span className="text-dark">{hospital}</span>
                                </p>
                              
                            </div>
                            <div className=" text-center">
                            <Link to ={`/booking/${key}`}>

                            <button className="btn btn-outline-primary fw-bold  mb-5"> Book And Appointment</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;