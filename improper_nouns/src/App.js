import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Memes from './Memes';
import Add from './Add';
import View from './View';

import Modal from './Modal';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';


const memes = [
  {
  id: 5,
  alias: "bry77",
  one: "eggs florentine",
  two: "mimosa",
  three: "decent buzz",
  four: "drunk friends",
  five: "cashmere outfit"
  },
  {
  id: 2,
  alias: "jaspypants",
  one: "madison gallery",
  two: "straight vodka",
  three: "bad art",
  four: "drunk friends",
  five: "brioni suit"
  },
  {
  id: 3,
  alias: "brobert65",
  one: "PBR",
  two: "frat house",
  three: "kegstand",
  four: "spirit week",
  five: "impending exams"
},
  {
  id: 4,
  alias: "sunsetbear",
  one: "hawaiian beaches",
  two: "multiple girlfriends",
  three: "lsd",
  four: "tiki bar",
  five: "coop farming"
  }
];

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
             <Add />
           </Modal>
        </header>
        <div className="daily-feed">
          <Memes memes={memes}/>
        </div>
      </div>
    );
  }
}

export default App;
