

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';

import View from './View';
import MemeForm from './MemeForm';
import { getMemes } from '../actions/memes';

const MemeList = (props) =>
  (
    <section className="clearfix">
     <h2>daily feed</h2>
      {props.memes.map(meme =>
        <article key={meme.id}>
          <h3>by, {meme.alias}</h3>
          <p>{meme.one}</p>
          <p>{meme.two}</p>
          <p>{meme.three}</p>
          <p>{meme.four}</p>
          <p>{meme.five}</p>
        </article>
      )}
     </section>
  );

class Memes extends Component {

  componentDidMount() {
    this.props.getMemes()
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path='/Feed' render={() => (
            <div className="MemesContainer">
              <h1>Memes</h1>
              {this.props.memes.map(meme => <MemeList key={meme.id} meme={meme} />)}
            </div>
          )} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    memes: state.memes
  })
}

 export default connect(mapStateToProps, { getMemes })(Memes);
