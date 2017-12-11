

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';

import View from './View';
import MemeForm from './MemeForm';
// import Meme from '../Meme';
import { getMemes } from '../actions/memes';


class Memes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      memes: []
    }
  }
  componentDidMount(){
    this.props.getMemes()
  }

  memeList = ({ meme }) => (
    <article key={meme.id}>
      <h3>by, {meme.alias}</h3>
      <p>{meme.one}</p>
      <p>{meme.two}</p>
      <p>{meme.three}</p>
      <p>{meme.four}</p>
      <p>{meme.five}</p>
    </article>
  );

  render() {
    return (
      <div className="MemesContainer">
        <h1>daily feed</h1>
        {this.state.memes.map(meme => {
        <memeList key={meme.id} meme={meme}/>
        })
      }
    </div>);
  }
}

const mapStateToProps = (state) => {
  return ({
    memes: state.memes
  })
}

 export default connect(mapStateToProps, { getMemes })(Memes);
