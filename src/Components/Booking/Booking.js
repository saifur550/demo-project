import React from 'react';
import {  Card, Col, Container, Row, } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import booking from '../../assets/images/booking1.png'

const Booking = () => {
    const { serviceId } = useParams();
    const { services } = useAuth();
    const bookingAppointment = services.find((service) => service.key === Number(serviceId));
    // console.log(services)
    const { img, title, specialist, desc } = bookingAppointment


    return (
        <div>
            {
                title ? (
                    <Container className=" ">
                        <Row>
                        <Col  className="my-5">
                            <Card>
                                <Card.Header>Featured</Card.Header>
                                <Card.Body>
                                    <img src={img} alt="" />
                                    <Card.Title>
                                        <h4 className="text-info fw-bold">
                                        {title}
                                        </h4>
                                    </Card.Title>
                                    <Card.Text>
                                      <h6 className="w-50 text-muted">
                                      {desc}
                                      </h6>
                                    </Card.Text>
                                    <h4> <span className="text-info fw-bold">SPECIALTIES </span> : {specialist}</h4>
                                   <Link to ="/services">
                                       <button className="btn btn-primary" > Back Services Page  </button>
                                   </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Container>
                ) : <p>Not Yet Booking</p>
            }

            
        </div>
    );
};

export default Booking;