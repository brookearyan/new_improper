import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateMemeFormData } from './actions/memeForm';
import { createMeme } from './actions/memes';

class Add extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentMemeFormData = Object.assign({}, this.props.memeFormData, {
      [name]: value
    })
    this.props.updateMemeFormData(currentMemeFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMeme(this.props.memeFormData)
  }

  render() {
    const { alias, one, two, three, four, five } = this.props.memeFormData;

    return (
      <div>
      share your current
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">alias:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="alias"
              value={alias}
            />
          </div>
          <div>
            <label htmlFor="price">1:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="one"
              value={one}
            />
          </div>
          <div>
            <label htmlFor="img_url">2:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="two"
              value={two}
            />
          </div>
          <div>
            <label htmlFor="length">3:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="three"
              value={three}
            />
          </div>
          <div>
            <label htmlFor="length">4:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="four"
              value={four}
            />
          </div>
          <div>
            <label htmlFor="length">5:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="five"
              value={five}
            />
          </div>
           <button type="submit">Add Board</button>
        </form>
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
})(Add);
