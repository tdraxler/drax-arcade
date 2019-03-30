import React from 'react';

export class SecretDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>This will show something secret in the future.</p>
      </div>
    );
  }
}

export default SecretDisplay;