import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import MainPage from './components/MainPage';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { createStore } from 'redux';


const reducer = (state, action) => {
  console.log('reducer of ', state, action);
  return state;
};

const store = createStore(reducer);

console.log("The app is running...");

const AppGateway = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
        <Switch>

        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));