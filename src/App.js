import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navbar';
// import PrivateRoute from './components/privateRoute';
import MainContent from './components/mainContent';
import AccessDenied from './components/accessDenied';

import { loadUser } from './actions/authAction';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import ProductList from './components/product/productList';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (

      <Provider store={store}>
        <div className="App">
            <NavigationBar />
              
                <Switch>
                  <Route path="/content" component={MainContent} />
                  <Route path="/productList" component={ProductList} />
                  {/* <Route path="/test/shoppinglist" component={ShoppingList} /> */}
                  <Route path="/forbidden" component={AccessDenied} />

                  {/* <PrivateRoute path="/admin/orders/:id" component={OrderDetail}/>
                          <PrivateRoute path="/admin/orders" component={Order}/>
                          <PrivateRoute path="/admin/dashboard" component={Dashboard}/> */}
                </Switch>
              {/* </Col> */}
              {/* <Col className="sticky-top" sm={2} style={{ height:"100vh"}}>
                    
                      
                      <Sidebar />
                      
                    
                    
                  </Col>
                  <Col sm={10}>
                    <Row className="sticky-top" style={{marginBottom:'1rem'}}>
                      <Col ><NavigationBar /></Col>
                    </Row>
                    <Row>
                      <Col>
                        
                      </Col>
                    </Row>
                  </Col> */}
            {/* </Row> */}
          {/* </Container> */}



        </div>

      </Provider>
    );
  }

}

export default App;
