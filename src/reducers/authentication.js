const initialState = {
  loggedIn: false,
  username: ''
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      console.log("Log in");
      return {
        loggedIn: true,
        username: 'testguy'
      }
    case 'LOGOUT':
      return {
        loggedIn: false,
        username: ''
      }
    default:
      return state;
  }

}