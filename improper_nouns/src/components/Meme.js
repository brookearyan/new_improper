import React from 'react';
import { connect } from 'react-redux';
import { dateFormatter } from '../components/dateFormatter'


//stateless presentational component
//renders JSX for Memes

export const Meme = ({ meme }) => {
  return (
    <article className="memes" key={meme.id}>
      <div>
        <h3>by, {meme.alias}</h3>
        <h6>{dateFormatter(meme)}</h6>
      </div>
      <p>{meme.one}</p>
      <p>{meme.two}</p>
      <p>{meme.three}</p>
      <p>{meme.four}</p>
      <p>{meme.five}</p>
    </article>
  );
}

// 2017-12-11T19:25:34.537Z

const mapStateToProps = (state, ownProps) => {
  return {
    meme: state.memes.find(meme => meme.id === ownProps.match.params.memeId)
  }
}

export default connect(mapStateToProps)(Meme);
