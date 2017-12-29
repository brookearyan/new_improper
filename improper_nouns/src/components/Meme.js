import React from 'react';
import { connect } from 'react-redux';

const Meme = ({ meme }) => {
  return (
    <div>
      <article key={meme.id}>
        <h3>by, {meme.alias}</h3>
        <p>{meme.one}</p>
        <p>{meme.two}</p>
        <p>{meme.three}</p>
        <p>{meme.four}</p>
        <p>{meme.five}</p>
      </article>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    meme: state.memes.find(meme => meme.id == ownProps.match.params.memeId)
  }
}

export default connect(mapStateToProps)(Meme);
