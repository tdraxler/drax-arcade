// export const login = (username, password) => {
//   var input = this.state;
//   event.preventDefault();
//   fetch('/login', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: input.username,
//       password: input.password
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//   .then(res => {
//     if (res.status === 200) {
//       this.props.history.push('/');
//     } else {
//       console.log(res);
//       const error = new Error(res.error);
//       throw error;
//     }
//   })
//   .catch(err => {
//     console.error(err);
//     alert("Couldn't log you in for some reason.");
//   });
//

export const login = (username, password) => new Promise ((resolve, reject) => {
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => {
    if (res.status === 200) {
      resolve({success: true});
    } else {
      reject(res.error);
    }
  })
  .catch(err => {
    console.error(err);
    reject(err);
  });
});

export default login;
