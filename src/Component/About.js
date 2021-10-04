import React from 'react'
import { Col, Row, Image, ProgressBar, Container } from 'react-bootstrap'

import '../style/about.css'

function About() {
    return (
        <div>
            <Container>
            <Row className="about-row">
                <div>
                <h1>About Us</h1>
                <p className="paragraph">Noipunno Yoga is focused on providing intuitive and comprehensive yoga training app for everyone. Available now as top free mobile Healthcare & Fitness app, our products help millions of people to get and stay healthy by exercising yoga workouts on-the-go. </p>
                </div>
            </Row>
            
            <Row className="about-second-row">
                <Col sm={12} md={6}>
                    <Image src="./images/modern.png" className="about-img" />
                </Col>

                <Col sm={12} md={6}>
                    <h1>WHAT WE DO</h1>
                    <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                    <br/>
                    <div>
                    <h5>Breathing</h5>
                    <ProgressBar now={60} label={60}></ProgressBar>
                    <br/>
                    <h5>Metabolism</h5>
                    <ProgressBar now={75} label={75}></ProgressBar>
                    <br/>
                    <h5>Flexibility</h5>
                    <ProgressBar now={90} label={90}></ProgressBar>
                    <br/>
                    <h5>Strongness</h5>
                    <ProgressBar now={80} label={80}></ProgressBar>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About
