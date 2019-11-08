import React, { Component, Fragment } from 'react'
import { Container, Button, Table, ButtonGroup } from 'react-bootstrap'
import {  BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getUsers } from '../../../actions/userAction';

class UserList extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users } = this.props;
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
                {users !== null ? users.map(user => {
                    const { _id, userName, userEmail, userAddress,userPhone,userGenre,userPassword } = user;

                    return (
                        <tr key = {_id}>
                            {/* <td>{1}</td>
                            <td>{_id}</td> */}
                            <td>{userName}</td>
                            <td>{userEmail}</td>
                            <td>{userAddress}</td>
                            <td>{userPhone}</td>
                            <td>{userGenre}</td>
                            <td>{userPassword}</td>
                            {/* <td>{isDeleted ? 'Unvailable' : 'Available'}</td> */}

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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Genre</th>
                                <th>Password</th>
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
    users: state.user.users,
    loading: state.user.loading,
    error: state.error
})
export default connect(mapStateToProps, { getUsers })(UserList)
