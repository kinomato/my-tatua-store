import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navbar';
// import PrivateRoute from './components/privateRoute';
import UserRoute from './components/userRoute';
import MainContent from './components/mainContent';
import AccessDenied from './components/accessDenied';
import Usercontent from './components/user/usercontent'
import Tst from './components/tst'
import CheckoutScreenKai from './components/order/checkoutScreenKai'
import { loadUser } from './actions/authAction';
import { getCartItems } from './actions/cartAction';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import ProductList from './components/product/productList';
import checkoutScreenKai from './components/order/checkoutScreenKai';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(getCartItems());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavigationBar />
          <Container fluid={true} style={{ marginTop: "1rem" }}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={MainContent} />
              <Route path="/admin/products" component={ProductList} />
              {/* <Route path="/test/shoppinglist" component={ShoppingList} /> */}
              <Route path="/forbidden" component={AccessDenied} />
              <Route path="/test" component={Tst} />
              <Route path="/checkoutscreen" component={CheckoutScreenKai} />
              <UserRoute path="/account" component={Usercontent} />
              {/* <PrivateRoute path="/admin/orders/:id" component={OrderDetail}/>
              <PrivateRoute path="/admin/orders" component={Order}/>
              <PrivateRoute path="/admin/dashboard" component={Dashboard}/> */}
            </Switch>
          </Container>
        </div>
      </Provider>
    );
  }
}
export default App;
