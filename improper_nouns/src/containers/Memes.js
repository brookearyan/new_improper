import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMemes } from '../actions/memes'
import { Meme } from '../components/Meme'
import { dateFormatter } from '../components/dateFormatter'

// stateful functional


class Memes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      likes: 0
    }
    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount(){
    this.props.getMemes()
  }

  handleLike(event){
    event.preventDefault()
    this.setState({likes: 1})
  }

  render() {
    const memes = this.props.memes.map(meme => {
      return <Meme likes={this.state.likes} handleLike={this.handleLike} key={meme.id} meme={meme}/>
    })

    return (
      <div className="meme-container">
        {memes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    memes: state.memes,
    likes: state.likes
  })
}

export default connect(mapStateToProps, { getMemes })(Memes);
