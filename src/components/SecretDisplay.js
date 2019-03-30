import React from 'react';
import { Link } from 'react-router-dom';

export class SecretDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      redirect: false
    };
  }

  componentDidMount() {
    fetch('/checkToken')
      .then(res => {
        if (res.status === 200) {
          this.setState({ loading: false });
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false, redirect: true});
      });
  }

  render() {
    const { loading, redirect } = this.state;
    if (loading) {
      return (
        <div>
          <h4>Checking your credentials...</h4>
        </div>
      );
    }
    if (redirect) {
      return (
        <div>
          <h4>You're not allowed to see the secret stuff</h4>
          <li><Link to="/">Go back</Link></li>
        </div>
      );
    }
    return (
      <div>
        <h4>Congratulations! You are authorized to see this secret page.</h4>
      </div>
    );
  }
}

export default SecretDisplay;