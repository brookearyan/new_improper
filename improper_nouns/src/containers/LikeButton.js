
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMemeFormData } from '../actions/memeForm'
import { createLike } from '../actions/memes'

export class LikeButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      alias: '',
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      created_at: '',
      likes: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // console.log(this.props)
    // const { name, value } = event.target;
    // const currentLikes = Object.assign({}, this.state.likes, {
    //   [name]: value + 1
    // })
    // this.props.updateMemeFormData(currentLikes)

    this.setState({ likes: this.state.likes + 1 })
    console.log(this.state)
  }

  componentWillUpdate() {
  }
  // const { likes } = this.props.memeFormData;
  // handleOnSubmit(event) {
  //   event.preventDefault()
  //   this.props.createLike(this.props.memeFormData)
  // }
  render() {
    const { likes } = this.state;
    return (
      <div className="likebtn">
        <button name="likes" value={likes} onClick={this.handleClick}>
          likes: {likes}
        </button>
      </div>
    )
  }
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     meme: state.memes.find(meme => meme.id === ownProps.match.params.memeId)
//   }
// }
//
const mapStateToProps = state => {
  return {
    likes: state.likes
  }
}

export default connect(mapStateToProps, {
  updateMemeFormData,
  createLike
})(LikeButton);
