import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';

console.log("The app is running...");

const AppGateway = () => {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));