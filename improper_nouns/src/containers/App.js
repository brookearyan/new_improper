import React, { Component } from 'react';
import Memes from './Memes';
import MemeForm from './MemeForm';
import Modal from './Modal';
import '../App.css';

// stateful parent Component that sets state

//----maybe separate modal below
//----

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
        <section>
          <section className="topper">
            <header className="App-header">
              <h1 className="app-title">welcome to improper nouns</h1>
              <button onClick={this.toggleModal}>
                +
              </button>
            </header>
            <h1 className="feed-title">
              daily feed
            </h1>
          </section>
        </section>

        <section>
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
