import React, { Component } from 'react'
import Memes from './Memes'
import MemeForm from './MemeForm'
import Modal from '../components/Modal'
import '../App.css'

// stateful parent Component that sets state
//----maybe separate modal below

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="app">
        <section className="topper">
          <div className="app-header">
            <div className="add-button">
              <button onClick={this.toggleModal}>
                +
              </button>
            </div>
            <h1 className="app-title">
              improper nouns
            </h1>
            <div className="space-saver-header">
            </div>
          </div>
          <h1 className="feed-title">
            daily feed
          </h1>
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
