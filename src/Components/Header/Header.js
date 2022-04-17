import React from 'react';
import './Header.css'
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import logo from '../../assets/images/logo3.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { AllContexts } = useAuth();
    const { user, userLogOut } = AllContexts;
    const { displayName, photoURL, email, } = user;
    return (
        <>
            <Navbar className="bg-dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className="d-flex align-items-center">
                            <img className="logo" src={logo} alt="" /> <span className="text-white logo-size
                         fw-bolder">Health</span> <span className="text-primary logo-size fw-bolder">Care</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle className aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center ">
                            <Nav.Link as={NavLink} className="text-white fw-bold" to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white fw-bold" to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white fw-bold" to="/services">Services</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white fw-bold" to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white fw-bold" to="/facilities">Facilities & Amenities</Nav.Link>
                            <Nav.Link as={NavLink} className="text-white fw-bold" to="/contact">Contact</Nav.Link>


                            {!displayName ?
                                (<>
                                    <Nav.Link as={NavLink}
                                        className="text-white fw-bold"
                                        to="/signup">Register</Nav.Link>

                                    <Nav.Link as={NavLink}
                                        className="text-white fw-bold"
                                        to="/login">Log In</Nav.Link>

                                </>) :
                                <NavDropdown
                                    title={<img className="user-img"
                                        src={photoURL} alt="" />}
                                    id="basic-nav-dropdown">


                                    <div className="user-info text-center">
                                        <h6 className="text-info fw-normal">
                                            {displayName}
                                        </h6>
                                        <p className="m-0 text-secondary">
                                            {email}
                                        </p>
                                        <button onClick={userLogOut} className="btn btn-primary">Sign Out</button>
                                    </div>

                                </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;