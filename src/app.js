import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import MainPage from './components/MainPage';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

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