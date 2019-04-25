import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import { loginRequest } from './Login';
import { login } from '../actions/authentication';

const checkLoginStatus = () => {
  fetch('/userInfo')
    .then((res) => res.json())
    .then((result) => {
        console.log(result);
      },
      (error) => {
        console.log("Couldn't get user info!");
      }
    );
  return;
};

export default checkLoginStatus;