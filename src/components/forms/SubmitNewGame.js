import React from 'react';

export class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      gameDesc: '',
      gamePath: '',
    };
  }

  render() {
    return (<div>
      <h2>Here you'll be able to enter details for a new game if you have admin priviledges.</h2>
    </div>);
  }
}

export default NewGame;