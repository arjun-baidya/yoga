import Button from '@restart/ui/esm/Button';
import React, {useEffect,useState} from 'react'
import {Col, Container, Image, Row } from 'react-bootstrap';
import '../style/service.css'

function Service() {

    const [yoga, setYoga] = useState([])
    console.log(yoga)

    useEffect(() =>{
        fetch('./yoga.JSON')
        .then(res=> res.json())
        .then(data=> setYoga(data))
    },[])
    return (
        <div>
            <h1 className="service">Services</h1>
            {
                yoga && yoga.map((item)=>(
                    <>
                    <Container>
                    <Row className="pb-4">
                        <Col sm={12} md={6}>
                            <Image  className="service-img" src={item.img} />
                        </Col>
                        <Col sm={12} md={6} className="right-column">
                            <h2>{item.name}</h2>
                            <p>{item.category}</p>
                            <Row>
                                <Col md={6}><p className="training-price">Online Training:$ {item.online}</p></Col>
                                <Col md={6}><p className="training-price">In-House : $ {item.offline}</p></Col>
                            </Row>
                            <div>
                                <p>{item.desc}</p>
                            </div>
                            <div className="add-member-btn">
                                <Button >Join Now</Button>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                    </>
                ))
            }
        </div>
    )
}

export default Service
