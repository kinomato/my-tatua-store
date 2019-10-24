import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/navbar';
import PrivateRoute from './components/privateRoute';
import MainContent from './components/mainContent';

import { loadUser } from './actions/authAction';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {StickyContainer,Sticky} from 'react-sticky';

class App extends Component {
  render() {
    return (
    
      <Provider store={store}>
            <div className="App">
              <Container fluid={true}>
                <NavigationBar/>
                <Row>
                  <Col>
                  <Switch>
                          <Route exact path="/" redirect Component={MainContent} />
                          {/* <Route path="/test/shoppinglist" component={ShoppingList} />
                          <Route path="/forbidden" component={AccessDenied} /> */}
                         
                          {/* <PrivateRoute path="/admin/orders/:id" component={OrderDetail}/>
                          <PrivateRoute path="/admin/orders" component={Order}/>
                          <PrivateRoute path="/admin/dashboard" component={Dashboard}/> */}
                        </Switch>
                        </Col>
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
                </Row>
              </Container>
  
  
  
            </div>
  
          </Provider>
    );
  }
  
}

export default App;
