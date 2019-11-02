import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IconContext } from 'react-icons'

import { AiOutlineMinusCircle } from 'react-icons/ai'
import { decrement } from '../../actions/cartAction';
export class DecrementBtn extends Component {
    static propTypes = {
        prop: PropTypes
    }
    handleClick = () => {
        const { cart, item } = this.props;
        console.log('decrement ' +  cart);
        this.props.decrement(cart, item);
    }
    render() {
        return (
            <IconContext.Provider value={{ color: "red" }}>
                <div>
                    <AiOutlineMinusCircle onClick={() => this.handleClick()} />
                </div>
            </IconContext.Provider>
        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart
})

const mapDispatchToProps = {
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(DecrementBtn)
