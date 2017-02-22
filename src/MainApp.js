import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MainPage from './mainPage/mainPage';
import UserPage from './userPage/userPage';
import ProductPage from './productPage/productPage';
import RegistrationPage from './registrationPage/registrationPage';
import LoginPage from './loginPage/loginPage';


class MainApp extends Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={MainPage}/>
          <Route path="/user" component={UserPage}/>
          <Route path="/product" component={ProductPage}/>
          <Route path="/registration" component={RegistrationPage}/>
          <Route path="/login" component={LoginPage}/>
        </Router>
      </div>
    );
  }

}

export default MainApp;
