const initialState = {
  loggedIn: false,
  username: '',
  profilePic: null //In the future: profile picture url of user
};

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN': //This action happens after the component has logged in the user.
      console.log("Log in");
      return {
        loggedIn: true,
        username: action.username,
        profilePic: null
      }
    case 'LOGOUT':
      return {
        loggedIn: false,
        username: '',
        profilePic: null
      }
    default:
      return state;
  }

}