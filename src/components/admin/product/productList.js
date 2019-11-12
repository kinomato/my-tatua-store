import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Table, ButtonGroup } from 'react-bootstrap'
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProducts, updateProduct } from '../../../actions/productAction';

class ProductList extends Component {

    static propTypes = {
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        updateProduct: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.getProducts();
        // this.props.updateProduct();
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
                        <tr key={_id}>
                            {/* <td>{1}</td>
                            <td>{_id}</td> */}
                            <td>{prodName}</td>
                            <td>{prodPrize}</td>
                            <td>{isDeleted ? 'Unvailable' : 'Available'}</td>

                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary">
                                        <Link to={`/admin/products/${_id}`} style={{textDecoration:'none',color:'white'}}>
                                            Detail
                                        </Link>
                                    </Button>
                                    <Button variant="danger" onClick="handleDelete">Del</Button>
                                    <Button variant="primary" onClick="handlUpdate">Update</Button>
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
                                <th>Product Name</th>
                                <th>Product prize (VND)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
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
export default connect(mapStateToProps, { getProducts, updateProduct })(ProductList)
