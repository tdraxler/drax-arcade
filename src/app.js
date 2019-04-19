import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import MainPage from './components/MainPage';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { authReducer } from './reducers/authentication';

console.log("The app is running...");

const store = createStore(
  authReducer,
  applyMiddleware(thunk)  
);

const AppGateway = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <MainPage />
        <Footer />
        <Switch>

        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));