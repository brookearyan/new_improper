import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMemeFormData } from '../actions/memeForm';
import { createMeme } from '../actions/memes';

//stateless functional Component

class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    const currentMemeFormData = Object.assign({}, this.props.memeFormData, {
      [name]: value
    })
    this.props.updateMemeFormData(currentMemeFormData)
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.createMeme(this.props.memeFormData)
  }

  render() {
    // eslint-disable-next-line
    const { id, alias, one, two, three, four, five } = this.props.memeFormData;

    return (
      <div className="modal-content">
        <p>share your current</p>
        <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="alias">one-time alias:</label><br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="alias"
            value={alias}
          />
        </div>
        <div>
          <label htmlFor="one">your five nouns...</label><br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="one"
            value={one}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="two"
            value={two}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="three"
            value={three}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="four"
            value={four}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="five"
            value={five}
          />
          </div>
           <button id="share-button" type="submit">share</button>
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
})(MemeForm);
