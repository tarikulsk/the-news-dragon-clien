import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNaf/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><h2>Main Contain</h2></Col>
                    <Col lg={3}><RightNav></RightNav></Col>
                </Row>

            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;