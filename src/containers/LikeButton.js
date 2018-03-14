
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createLike } from '../actions/likes'
import { getMemes } from '../actions/memes'

class LikeButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // this.handleLike()
    this.props.createLike(this.props.meme)
  }

  render() {
    return (
      <div className="like-button">
        <button onClick={this.handleClick}>
          <img className="heart"
            src="https://d30y9cdsu7xlg0.cloudfront.net/png/219-200.png"
          />
        </button>
      </div>
    )
  }
}

export default connect(null, {
  createLike
})(LikeButton);
