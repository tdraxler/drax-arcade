export const logIn = (
  {
    username='',
    password='',
  }
) => ({
  type: 'LOGIN',
  userInfo: {
    username,
    password
  }
});

export const logOut = (
  {
    username=''
  }
) => ({
  type: 'LOGOUT',
  userInfo: {
    username
  }
});

export const register = (
  {
    username='',
    password='',
  }
) => ({
  type: 'REGISTER',
  userInfo: {
    username,
    password
  }
});