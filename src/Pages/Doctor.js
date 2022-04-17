import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'


const Doctor = ({doctor}) => {
    const {img,name,ClinicalArea, desc} = doctor;
    return (
        <>
        
        <div className="col-lg-4 col-md-6 col-sm-12 service">
        <div className="card-deck mb-5 h-100 ">
            <div className="card box-shadow">
                <img className="card-img-top " src={img} alt="pic" />
                <div className="card-body  pt-3">
                    <h5 className="card-title fw-bold  service-title">{name}</h5>
                    <p className="card-text para text-muted">{desc.slice(0,55)}</p>
                    <div className="mb-4">
                        <p className="text-primary fw-bold">
                        <span className="margin-right">
                            <FontAwesomeIcon icon={faStethoscope} />  
                            </span>
                         SPECIALTIES : <br /> <span className=" text-dark"> {ClinicalArea}</span>
                        </p>

                  
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Doctor;