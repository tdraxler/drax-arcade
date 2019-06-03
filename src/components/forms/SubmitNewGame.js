/**DESCRIPTION:
SubmitNewGame is a component that allows admin users to enter details on a new game to add to the database.
It's not terribly user friendly, so it's meant for people like me (Thomas) to easily add games to the system.
***/
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameTitle: '',
      gameDesc: '',
      gamePath: '',
      gameImgURL: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const {value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //TODO: 
  }

  render() {
    return (
    <div className="arcade-container">
      <h2>Enter info about a new game here</h2>
      <Form
        onSubmit={e => this.handleSubmit(e)}
      >
        <Form.Group controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            name="gameTitle"
            type="text" placeholder="Enter the game title"
            value={this.state.gameTitle}
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name="gameDesc"
            as="textarea"
            rows="3"
            value={this.state.gameDesc}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>File Path</Form.Label>
          <Form.Control 
            name="gamePath"
            type="text" placeholder="Path to the game file" 
            value={this.state.gamePath}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Preview Image</Form.Label>
          <Form.Control 
            name="gameImgURL"
            type="text" placeholder="Enter the preview image URL" 
            value={this.state.gameImgURL}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>);
  }
}

export default NewGame;