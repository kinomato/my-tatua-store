import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import RegisterModal from './auth/register';
import Logout from './auth/logout';
import Login from './auth/login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
class NavigationBar extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }
    // componentDidUpdate(Prevprops) {
    //     const {user} = this.props;
    //     if(user !== Prevprops.user) {
    //         console.log(user);
    //     }
    // }
    render() {
        const guestLinks = (
            <Fragment>
                <Nav.Item>
                    <RegisterModal />
                </Nav.Item>
                <Nav.Item>
                    <Login />
                </Nav.Item>
            </Fragment>
        )
        const authLinks = (
            <Fragment>
                <Nav.Link>
                    <span className="mr-3">
                        <strong>{this.props.user ? `Welcome ${this.props.user.tenNguoiDung}` : ''}</strong>
                    </span>
                </Nav.Link>
                <Nav.Item>
                    <Logout />
                </Nav.Item>
            </Fragment>
        )
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link >
                                <Link to="/content">Home</Link>
                            </Nav.Link>
                            {/* <Nav.Link href="">Manage</Nav.Link> */}
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    Manage
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Manage User</Dropdown.Item>
                                    <Dropdown.Item href="/productList">Manage Product</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Manage Topping</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">About</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                        <Nav className="ml-auto">
                            {/* {!this.props.isAuthenticated ? <RegisterModal />:null}
                            {!this.props.isAuthenticated ? <Login/>:null}
                            {this.props.user ? <div>{this.props.user.tenNguoiDung}</div>:null}
                            {this.props.isAuthenticated ? <Logout/>:null} */}
                            {this.props.isAuthenticated ? authLinks : guestLinks}


                        </Nav>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})
export default connect(mapStateToProps, {})(NavigationBar);