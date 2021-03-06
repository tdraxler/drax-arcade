export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (username) => {
  console.log("Sending this: " + username.username);
  return {
    type: LOGIN,
    username: username.username
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};