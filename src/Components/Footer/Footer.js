import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        //  main section
        <div className="main-footer" >
            <div className="container-fluid bg-dark text-white ">
                <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4"> About Us </h5>
                                <ul className="list-unstyled mb-4">
                                    <li>
                                        <a href="#!" className="text-white">About PHKL</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Awards</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Expansion Plan</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4">Our Services</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white">Latest Services</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Accident & Emergency </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">International Patient Services</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Centres Of Excellence & Clinics</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white">Health Screening Centre</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4">Patient Guide</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white">Admission & Discharge</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white"> General Facilities</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                                <h5 className="text-uppercase mb-4">Sign up to our newsletter</h5>

                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="form5Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form5Example2">Email address</label>
                                </div>

                                <button type="submit" className="btn btn-outline-white btn-block">Subscribe</button>
                            </div>

                        </div>

                    </div>



                    <div className="text-center p-3 border-top border-white">
                        <p className="text-white bg-dark py-3 text-center fw-bold">
                            Copyright © All Reserved by   &copy; {new Date().getFullYear()} Copyright : <a href="https://github.com/saifur550"> Saifur  Rahman </a>
                        </p>
                    </div>

                </footer>

            </div>
            {/* <!-- End of .container --> */}
        </div>
    );
};

export default Footer;

