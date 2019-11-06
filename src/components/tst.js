import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap';
export class tst extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => console.log(this.props.localcart)}>test</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    localcart: state.cart.localcart
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(tst)

