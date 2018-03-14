import React from 'react';
import { connect } from 'react-redux';
import { dateFormatter } from './dateFormatter'
import { Likes } from '../containers/Likes'

export const Meme = ({ meme }) => {
  return (
    <article className="memes" key={meme.id}>
      <div>
        <Likes meme={meme} likes={meme.likes.length} />
        <h6>{dateFormatter(meme)}</h6>
        <h3>by, {meme.alias}</h3>
      </div>
      <p>{meme.one}</p>
      <p>{meme.two}</p>
      <p>{meme.three}</p>
      <p>{meme.four}</p>
      <p>{meme.five}</p>
    </article>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    meme: state.memes.find(meme => meme.id === ownProps.match.params.memeId)
  }
}

export default connect(mapStateToProps)(Meme);
