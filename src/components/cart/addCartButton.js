import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Button} from 'react-bootstrap'
import {connect} from 'react-redux';
import {addCartItem, incrCartItem, calculate} from '../../actions/cartAction';
import uuid from 'uuid';

class AddCartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localcart: []
        }
        // this.CheckDuplicate = this.CheckDuplicate.bind(this);
    }
    
    CheckDuplicate=(product) =>{
        let temp = false;
        const {cart} = this.props;
        const {localcart} = this.state;
        this.setState({
            localcart: cart
        })
        console.log(product);
        localcart.forEach(item => {
            if(item.product._id===product._id)
            {
                const newitem = {...item, sl: item.sl++}
                item = newitem;
                console.log(localcart);
                temp = true;
                return this.props.incrCartItem(localcart);
            }
        });
        if(!temp)
        this.props.addCartItem({id:uuid(),product,sl:1})
        
    }
    
    // componentDidUpdate(Prevprops) {
    //     const {cart} = this.props;
    //     if(Prevprops.cart !== this.props.cart)
    //     this.setState({
    //         localcart: cart
    //     })
    //     this.props.calculate(this.state.localcart)
    // }
    componentDidUpdate(prevProps) {
        const {cart} = this.props;
        if(cart !== prevProps.cart) {
            // kiem tra registor error
            this.setState({
                localcart: cart
            })
            this.props.calculate(this.state.localcart)
        }
    }
    render() {
        const { product } = this.props;
        return (
            <Button variant="outline-primary" onClick={() =>this.CheckDuplicate(product)}>Đặt</Button>
        )
    }
    
   
}

AddCartButton.propTypes = {
    addCartItem:PropTypes.func.isRequired,
    incrCartItem:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    cart: state.cart.cart
})
export default connect(mapStateToProps,{addCartItem,incrCartItem,calculate})(AddCartButton)

