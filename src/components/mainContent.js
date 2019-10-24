import React, { Component } from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import ControlledCarousel from './carousel';
import Tst from './tst';
class MainContent extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ControlledCarousel/>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default MainContent