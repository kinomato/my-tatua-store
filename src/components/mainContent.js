import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import ControlledCarousel from './carousel';
import Products from './product/products';
import InfoUmbreon from './info/infoUmbreon';
import Cart from './cart/cart';
import Tst from './tst';
class MainContent extends Component {
    render() {
        return (
            <div>
                <Row style={{ marginBottom: "2rem" }}>
                    <Col sm={7}>
                        <ControlledCarousel />
                    </Col>
                    <Col>
                        <InfoUmbreon />
                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        <Card>
                            <Card.Header>Featured</Card.Header>
                            <Card.Body>
                                <Products />
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col>
                        <Cart/>
                        
                    </Col>
                </Row>

            </div>
        )
    }
}
export default MainContent