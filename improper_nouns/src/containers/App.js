import React, { Component } from 'react';
import Memes from './Memes';
import MemeForm from './MemeForm';
import Modal from './Modal';
import '../App.css';


class App extends Component {
  constructor(props) {
  super(props);

  this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillMount = () => {
    let articleWidth = window.innerWidth/3;
    return articleWidth;
  }

  render() {
    return (
      <div className="App">
        <section className="topper">
          <header className="App-header">
            <h1>Welcome to Improper Nouns</h1>
            <button onClick={this.toggleModal}>
              +
            </button>
          </header>
        </section>
        <section className="daily-feed">
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            <MemeForm />
          </Modal>
          <Memes />
        </section>
      </div>
    );
  }
}

export default App;
