
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMemeFormData } from '../actions/memeForm'
import { createMeme } from '../actions/memes'

class MemeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alias: '',
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      created_at: '',
      likes: []
    }
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
    const { id, alias, one, two, three, four, five } = this.props.memeFormData;

    return (
      <div className="modal-content">
        <h4>share your current</h4>
        <form onSubmit={this.handleOnSubmit}>
          <section>
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
               <button className="share-button" type="submit">share</button>
            </section>
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
