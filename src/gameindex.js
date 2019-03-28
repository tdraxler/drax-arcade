import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import NewUserForm from './components/NewUserForm';

import Header from './components/Header';
import Footer from './components/Footer';

console.log("The app is running...");

const AppGateway = () => {
  return (
    <div>
      <Header />
      <div className="arcade-container">
        <h1>Nothing here yet.</h1>
        <a href="/">Go back</a>
        <h2>Or try testing the signup function</h2>
        <NewUserForm />
      </div>
      <Footer />
    </div>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));