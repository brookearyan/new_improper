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
      memes: []
    }
  }

  componentDidMount(){
    this.props.getMemes()
  }

  render() {
    const memes = this.props.memes.map(meme => {
      // dateFormatter(meme)
      return <Meme key={meme.id} meme={meme}/>
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
    memes: state.memes
  })
}

export default connect(mapStateToProps, { getMemes })(Memes);
