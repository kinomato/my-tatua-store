import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getProducts } from '../../actions/productAction';
import AddCartButton from '../cart/addCartButton';

import PropTypes from 'prop-types';
class Products extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.getProducts();
    }
    handleOnclick(item) {
        console.log(item);
    }
    render() {
        const { products } = this.props;
        return (
            <div>
                <Row>
                    {products.map(product => {
                        const { _id, prodName, prodURL, prodPrize, isDeleted } = product;
                        return (
                            <Col style ={{marginBottom:"2rem"}}>
                                <Card style={{ height:"100%", width: '15rem' }}>
                                    <Card.Img variant="top" src={prodURL} style={{height:'10rem'}} />
                                    <Card.Body>
                                        <Card.Title>{prodName}</Card.Title>
                                        <Card.Text>
                                            {prodPrize}
                                        </Card.Text>
                                        {/* <Button variant="primary" onClick={(product)=> this.handleOnclick(product)} block>Chọn</Button> */}
                                        <AddCartButton product={product}/>
                                    </Card.Body>
                                </Card>
                            </Col>


                        )
                    })}
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    products: state.product.products,
    loading: state.product.loading,
    error: state.error
})
export default connect(mapStateToProps, { getProducts })(Products)