import React from 'react';

export class ShowUserInfoTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    fetch('/userInfo', {
      method: "GET"
    })
      .then(res => res.json())
      .then((jsonData) => {
        this.setState({username: jsonData.username});
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <h5>Hi {username.length > 0 ? username : 'anonymous person'}!</h5>
      </div>
    );
  }
}

export default ShowUserInfoTest;