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
      <Footer />
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));