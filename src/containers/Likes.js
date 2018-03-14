import React, { Component } from 'react'
import LikeButton from './LikeButton'
import { getMemes } from '../actions/likes'

export class Likes extends Component {
  componentDidUpdate() {
    this.props.getMemes();
  }
  render() {
    return (
      <div className="like-button">
        <LikeButton meme={this.props.meme} />
        <h5 className="like-amt">{this.props.likes}</h5>
      </div>
    );
  }
}
