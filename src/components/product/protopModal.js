import React, { Component } from 'react'
import {  Button, ListGroup, Form, Image, Container, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/modal.css'
class ProTopModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            curtops: []
        }
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    }
    render() {
        const { product, topps } = this.props;
        const newtopps = topps
        
        return (
            <>
                <Button block variant="outline-primary" onClick={() => this.handleShow()}>
                    Đặt
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={() => this.handleClose()}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <div className="d-flex flex-row justify-content-start">
                                <Image src={product.prodURL}  style={{ marginRight:'2rem',width:'5rem',height: '5rem' }} />
                                <div className="d-flex flex-column ">
                                    <strong>{product.prodName}</strong>
                                    <p>Giá: {product.prodPrize}</p>
                                </div>
                            </div>

                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>Chọn topping</h4>
                        <Form>
                            {/* {['checkbox', 'radio'].map(type => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`default ${type}`}
                                    />

                                    <Form.Check
                                        disabled
                                        type={type}
                                        label={`disabled ${type}`}
                                        id={`disabled-default-${type}`}
                                    />
                                </div>
                            ))} */}
                            {newtopps.map(topp => (
                                <Container>
                                    <Row>
                                        <Col>
                                            <div key={topp._id} className="mb-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    id={`yolo-${topp.toppName}`}
                                                    label={`${topp.toppName} - ${topp.toppPrize}`}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>

                            ))}
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = state => ({
    topps: state.topping.topps
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(ProTopModal)
