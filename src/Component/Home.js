import React,{useEffect,useState} from 'react'
import { Container,Row,Col, Image,Button,CardGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../style/home.css'

function Home() {

    const [yoga, setYoga] = useState([])
    console.log(yoga)

    useEffect(() =>{
        fetch('./yoga.JSON')
        .then(res=> res.json())
        .then(data=> setYoga(data))
    },[])

    return (
        <div>
            <Container>
                <Row className="home-first-row">
                    <Col md={4} sm={12} className="left-column">
                        <h1 className="title">
                        Traditional <br/>
                        Yoga<br/>
                        Center
                        </h1>
                        <Button className="join-btn" >Join Now</Button>
                    </Col>
                    <Col md={8} sm={12} className="right-column">
                        <Image className="home-yoga-image" src="./images/yoga.png"/>
                    </Col>
                </Row>

                <Row className="service-row">
                    <h1>Our Services</h1>
                    <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
                    <Card>
                    <CardGroup className="pt-2">
                        {
                         yoga.slice(0,3).map((item)=>(
                                <Card className="service-card">
                                    <Card.Img variant="top" src={item.img} className="card-img" />
                                    <Card.Body>
                                    <Card.Title>
                                        <Link to="/services">{item.name}</Link>
                                    </Card.Title>
                                    <Card.Text>
                                        <Row className="fess-row">
                                            <Col>
                                                <p className="fees">Online: ${item.online}</p>
                                            </Col>
                                            <Col>
                                                <p className="fees">In-House: ${item.offline}</p>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </CardGroup>
                    <CardGroup className="pt-4 pb-4">
                        {
                            yoga.slice(3,6).map((item)=>(
                                <Card className="service-card">
                                    <Card.Img variant="top" src={item.img} className="card-img" />
                                    <Card.Body>
                                    <Card.Title>
                                    <Link to="/services">{item.name}</Link>
                                    </Card.Title>
                                    <Card.Text>
                                        <Row className="fess-row">
                                            <Col>
                                                <p className="fees">Online: ${item.online}</p>
                                            </Col>
                                            <Col>
                                                <p className="fees">In-House: ${item.offline}</p>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </CardGroup>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Home
