import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Login from '../auth/login'
export class checkoutButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: false
        }
    }
    handleKickBack = () => {
        this.setState({
            temp: false
        })
    }
    render() {
        const {isAuthenticated} = this.props;
        if(isAuthenticated) {
            return (
                <div>
                    <Button variant="outline-primary" >yolo</Button>
                    
                </div>
            )
        } else {
            return (
                <div>
                    <Button block
                     variant="outline-success"
                    onClick={() => this.setState({temp:true})}>Thanh toán</Button>
                    <Login onClick={this.handleKickBack} temp = {this.state.temp} />
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(checkoutButton)
