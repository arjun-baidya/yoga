import React from 'react'
import { Row,Col } from 'react-bootstrap';
import '../style/footer.css'

export default function Footer() {
    return (
        <div>
            <Row className="footer">
                    <Col sm={12} md={6}>
                        <div>
                            <p>Copyright @ 2021 Traditional Yoga. All rights reserved.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <p>Privacy Policy | Terms & Conditions</p>
                        </div>
                    </Col>
                </Row>
        </div>
    )
}
