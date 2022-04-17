// import React, { useEffect, useState } from 'react';
import Service from '../../Pages/Service';
import './Services.css'
import Bounce from "react-reveal/Bounce";
import useAuth from '../../hooks/useAuth';

const Services = () => {
   const {services} = useAuth()

    // console.log(services);

    return (
        <div id="services">
            <div  className="container">
                <Bounce right cascade>
                    <div className="text-center py-5">
                        <h1 className="text-primary fw-bolder">
                            Our Services
                        </h1>
                        <p className="text-muted">
                            Pantai Hospital strives to bring you the best in medical care, <br /> covering a wide and diverse  range of specialised areas.
                            Have a look at the specialist services we have available.
                        </p>
                    </div>
                </Bounce>

                <Bounce>
                    <div className="row">
                        {
                            services.map(service => <Service
                                key={service.key}
                                service={service}
                            ></Service>)
                        }
                    </div>
                </Bounce>
            </div>
        </div>

    );
};

export default Services;