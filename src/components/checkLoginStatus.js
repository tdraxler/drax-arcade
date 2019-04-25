import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';
import { loginRequest } from './Login';
import { login } from '../actions/authentication';

// const checkLoginStatus = () => {
//   fetch('/userInfo')
//     .then((res) => res.json())
//     .then((result) => {
//         console.log("Found: " + result.username);
//         return result.username;
//       },
//       (error) => {
//         console.log("Couldn't get user info!");
//         return '';
//       }
//     );
//   return;
// };

export const checkLoginStatus = () => new Promise ((resolve) => {
  fetch('/userInfo')
    .then((res) => res.json())
    .then((result) => {
        console.log("Found: " + result.username);
        resolve(result.username);
      },
      (error) => {
        console.log("Couldn't get user info!");
        resolve('');
      }
    );
});


export default checkLoginStatus;