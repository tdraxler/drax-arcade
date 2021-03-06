import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Footer from './components/Footer';

console.log("The app is running...");

const AppGateway = () => {
  return (
    <div>
      <Header />
      <h1>Game View</h1>
      <a href="/games">Go Back</a>
      <Footer />
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));