import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Button, Table, ButtonGroup } from 'react-bootstrap'
import {  BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts } from '../../actions/productAction';

class ProductList extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { products } = this.props;
        const loading = (
            <Fragment>
                <td colSpan='5' align='center'>
                    <BeatLoader color="#50E3C2" animation="border" role="status" style={{ height: '10vh', width: '10vh' }} >
                        <span className="sr-only"><strong style={{ fontSize: '5vh' }}>Loading...</strong></span>
                    </BeatLoader>
                </td>
            </Fragment>
        )
        const loaded = (
            <Fragment>
                {products !== null ? products.map(product => {
                    const { _id, prodName, prodPrize, isDeleted } = product;

                    return (
                        <tr key = {_id}>
                            {/* <td>{1}</td>
                            <td>{_id}</td> */}
                            <td>{prodName}</td>
                            <td>{prodPrize}</td>
                            <td>{isDeleted ? 'Unvailable' : 'Available'}</td>

                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary">Detail</Button>
                                    <Button variant="danger">Del</Button>
                                </ButtonGroup>


                            </td>

                        </tr>
                    )
                }) : null}
            </Fragment>
        )
        return (
            <Container>
                <div className="row">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                {/* <th>STT</th>
                                <th>ID</th> */}
                                <th>Product Name</th>
                                <th>Product prize (VND)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>1</td>
                                <td>ABC123</td>
                                <td>Trân châu đen</td>
                                <td>10000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr> */}
                            {!this.props.loading ? loaded : loading}
                        </tbody>
                    </Table>

                </div>
                <div className="row">

                </div>
            </Container>

        )
    }
}
const mapStateToProps = state => ({
    products: state.product.products,
    loading: state.product.loading,
    error: state.error
})
export default connect(mapStateToProps, { getProducts })(ProductList)
