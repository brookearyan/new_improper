import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Memes from './Memes';
import MemeForm from './MemeForm';
import View from './View';


import Modal from './Modal';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Improper Nouns</h1>
              <button onClick={this.toggleModal}>
              +
              </button>
           <Modal show={this.state.isOpen}
             onClose={this.toggleModal}>
             <MemeForm />
           </Modal>
        </header>
        <div className="daily-feed">
          <Memes />
        </div>
      </div>
    );
  }
}

export default App;
