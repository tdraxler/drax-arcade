import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';

console.log("The app is running...");

const AppGateway = () => {
  return (
    <div>
      <h1>This is the app.</h1>
      <p>It's using Babel and React. Feel free to do what you want with it now.</p>
      <Header />
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));