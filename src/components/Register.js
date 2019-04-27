export const regRequest = (username, password) => new Promise ((resolve, reject) => {
  fetch('/createUser', {
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
    }
    else if (res.status === 403) {
      resolve({
        success: false
      });
    } 
    else {
      reject(res.error);
    }
  })
  .catch(err => {
    console.error(err);
    reject(err);
  });
});

export default { regRequest };