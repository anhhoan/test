import React from 'react';
import { Route, Switch, Router, Redirect } from 'react-router-dom';
import * as page from '../pages';
import history from '../history'
var token = localStorage.getItem('token')
var role = localStorage.getItem('role')
const Routes = () => (

  <div className="content">

    <Router history={history}>
      <Switch>
        <Route exact path="/user" render={() => {
          if (token) {
            return (
              <page.UserPage />
            )
          }
          else {
            alert('khong co quyen')

            return (
              <Redirect to='/' />
            )
          }
        }} />
        <Route exact path="/admin" render={() => {
          if (token) {
            if (role === 'admin') {
              return (
                <page.HomePage />
              )
            }
            else {
              alert('khong co quyen')
              return (
                <Redirect to='/user' />
              )
            }
          }
          else {
            alert('khong co quyen')

            return (
              <Redirect to='/' />
            )
          }
        }} />
        <Route exact path="/" render={() => {
          if (token) {
            if (role === 'admin') {
              return (
                <Redirect to='/admin' />)
            }
            if (role === 'user') {
              return (<Redirect to='user' />)
            }
          } else {
            return (
              <page.LoginPage />
            )
          }
        }} />
        <Route exact path="/signup" component={page.SignUpPage} />


      </Switch>
    </Router>
  </div>
);

export default Routes;
