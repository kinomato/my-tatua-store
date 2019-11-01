import React from 'react'
import PropTypes from 'prop-types'
import { Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addCartItem} from '../../actions/cartAction';
function AddCartButton(props) {
    const { product } = props;
    return (
        <Button variant="outline-primary" onClick={() => props.addCartItem(product)}>Đặt</Button>
    )
}

AddCartButton.propTypes = {
    addCartItem:PropTypes.func.isRequired
}

export default connect(null,{addCartItem})(AddCartButton)

