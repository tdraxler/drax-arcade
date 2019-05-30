import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss';
import MainPage from './components/MainPage';
import GamesIndex from './components/GamesIndex';
import GameView from './components/gameviewer/GameView.js';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { authReducer } from './reducers/authentication';
import AdminView from './components/AdminView';

console.log("The app is running...");

const store = createStore(
  authReducer
);

const AppGateway = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/gamesTest" exact component={GamesIndex}/>
          <Route path="/gameView" exact component={GameView}/>
          <Route path="/admin" exact component={AdminView}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<AppGateway/>, document.getElementById('app'));