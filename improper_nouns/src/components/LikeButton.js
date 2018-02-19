
import React from 'react';
import { connect } from 'react-redux'
import { updateMemeFormData } from '../actions/memeForm'
import { createMeme } from '../actions/memes'

export class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      likes: this.state.likes + 1,
      liked: !this.state.liked
    });
    this.props.createMeme(this.props.memeFormData)
  }

  render() {
    const color = this.state.liked? "liked" : "initial";
      return (
        <div className="likes">
          <h6>likes:{this.state.likes}</h6>
          <button className="heart" onClick={this.handleClick}>
            <div className={color}>
              <img src="https://image.flaticon.com/icons/svg/60/60993.svg"/>
            </div>
          </button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memeFormData: state.memeFormData
  }
}

export default connect(mapStateToProps, {
  updateMemeFormData,
  createMeme
})(LikeButton);
