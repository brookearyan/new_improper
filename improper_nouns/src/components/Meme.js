import React from 'react';
import { connect } from 'react-redux';
import { dateFormatter } from '../components/dateFormatter'
import { LikeButton } from '../components/LikeButton'

//stateless presentational component
//renders JSX for Memes

export const Meme = ({ meme, handleLike, likes}) => {
  return (
    <article className="memes" key={meme.id}>
      <LikeButton />
      <div>
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
