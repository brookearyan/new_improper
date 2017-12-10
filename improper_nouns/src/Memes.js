import React, { Component } from 'react';

const Memes = (props) =>
  (
    <section>
     <h2>daily feed</h2>
      {props.memes.map(meme =>
        <article>
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

export default Memes;
