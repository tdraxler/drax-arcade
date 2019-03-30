import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import NewUserForm from './components/NewUserForm';
import SecretDisplay from './components/SecretDisplay';
import ShowUserInfoTest from './components/ShowUserInfoTest';

import Header from './components/Header';
import Footer from './components/Footer';

console.log("The app is running...");

const AppGateway = () => {
  return (
    <div>
      <Header />
      <div className="arcade-container">
        <h1>Welcome to Authentication tests</h1>
        <h4>Choose a link below</h4>
        <BrowserRouter>
          <ul>
            <li><Link to="/">Dash</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/secret">Secret thing only registered users can see</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={ShowUserInfoTest}/>
            <Route path="/login" exact component={LoginForm}/>
            <Route path="/register" component={NewUserForm}/>
            <Route path="/secret" component={SecretDisplay}/>
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));