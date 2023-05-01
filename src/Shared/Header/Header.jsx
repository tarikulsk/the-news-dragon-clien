import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container >
            <div className="text-center">
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3'>
                <Button variant="danger">Latest</Button>
                <Marquee >
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...........Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...................Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as......................Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>

            </div>
            <div>
                <Navbar collapseOnSelect expand="lg"  >
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>

                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>


        </Container>
    );
};

export default Header;