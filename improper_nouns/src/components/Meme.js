import React from 'react';
//presentational component
//renders JSX for Memes

export const Meme = ({ meme }) => {
  return (
    <article className="memes" key={meme.id}>
      <div>
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
