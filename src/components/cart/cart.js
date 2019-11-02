import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartItems, deleteCartItem } from '../../actions/cartAction';
import { ListGroup, Button, ListGroupItem } from 'react-bootstrap'

export class Cart extends Component {
    static propTypes = {
        cart: PropTypes.array.isRequired,
        getCartItems: PropTypes.func.isRequired,
        deleteCartItem: PropTypes.func.isRequired
    }
    componentDidMount() {
        // this.props.getCartItems();
        // console.log(this.props.cart);
    }
    render() {
        const { cart } = this.props;
        if (cart.length > 0) {
            return (
                <div>
                    <ListGroup>
                        <ListGroup.Item>
                            <div className="d-flex flex-row justify-content-between">
                                <small>Tong tien: {this.props.tongtien}</small>
                            </div>
                        </ListGroup.Item>
                        {cart.map(item => {
                            return (


                                <ListGroup.Item>
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="d-flex flex-column float-left">
                                            <small>{item.product.prodName}</small>
                                            <small>{item.product.prodPrize}</small>
                                            <small>{item.sl}</small>

                                            {/* <Button variant="outline-danger">del</Button> */}
                                        </div>
                                        <Button variant="danger" onClick={() => this.props.deleteCartItem(item.id)}>x</Button>
                                    </div>


                                </ListGroup.Item>



                            )

                        })}
                    </ListGroup>
                </div>

            )
        } else {
            return (
                <div>
                    hello
                </div>
            )
        }


    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    tongtien: state.cart.tongtien
})

const mapDispatchToProps = {
    getCartItems,
    deleteCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

