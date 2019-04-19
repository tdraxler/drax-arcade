export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginAction = (username, password) => {
  return dispatch => {
    dispatch(loginBegin());
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: input.username,
        password: input.password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.status === 200) {
        dispatch(loginSuccess(res.status));
      } else {
        console.log(res);
        const error = new Error(res.error);
        dispatch(loginFailure(error));
      }
    })
    .catch(err => {
      alert("Couldn't log you in for some reason.");
      dispatch(fetchLoginFailure(error));
    });
  };
}

/*    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: input.username,
        password: input.password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        console.log(res);
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Couldn't log you in for some reason.");
    });
*/

export const loginBegin = () => ({
  type: LOGIN_BEGIN
});

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: { username }
});

export const loginFailure = (error) => ({
  type: LOGIN_SUCCESS,
  payload: { error }
});

export default loginAction;