import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

export default class InfoUmbreon extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
