
import React from 'react';
import { Link } from 'react-router-dom'

const MemeArticle = ({ match, surfboard }) => (
  <Link to={`${match.url}/${meme.id}`}>
    <article key={meme.id}>
      <h3>by, {meme.alias}</h3>
      <p>{meme.one}</p>
      <p>{meme.two}</p>
      <p>{meme.three}</p>
      <p>{meme.four}</p>
      <p>{meme.five}</p>
    </article>
  </Link>
)

export default MemeArticle;
