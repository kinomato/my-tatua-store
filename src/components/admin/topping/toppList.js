import React, { Component, Fragment } from 'react'
import { Container, Button, Table, ButtonGroup } from 'react-bootstrap'
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getToppings } from '../../../actions/toppingAction'

class ToppingList extends Component {
    static propTypes = {
        toppings: PropTypes.array.isRequired,
        getToppings: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.getToppings();
    }

    render() {
        const { topps } = this.props;
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
                {topps !== null ? topps.map(topping => {
                    const { _id, toppName, toppPrize } = topping;

                    return (
                        <tr key={_id}>
                            <td>{toppName}</td>
                            <td>{toppPrize}</td>
                            {/* <td>{isDeleted ? 'Unvailable' : 'Available'}</td> */}

                            <td>
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="secondary">
                                        <Link to={`/admin/toppings/${_id}`} style={{textDecoration:'none',color:'white'}}>
                                            Detail
                                        </Link>
                                    </Button>
                                    <Button variant="danger">Del</Button>
                                    <Button variant="primary">Update</Button>
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
                                <th>Topping Name</th>
                                <th>Topping prize (VND)</th>
                                {/* <th>Status</th> */}
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
    topps: state.topping.topps,
    loading: state.topping.loading,
    error: state.error
})
export default connect(mapStateToProps, { getToppings })(ToppingList)
