
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMemeFormData } from '../actions/memeForm'
import { createMeme } from '../actions/memes'

//stateless functional Component

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
      likes: 0
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    //sets entered data to a const
    console.log(this.props)
    const currentMemeFormData = Object.assign({}, this.props.memeFormData, {
      [name]: value
    })
    //uses Obj assign to copy all values in target obj & set to const
    this.props.updateMemeFormData(currentMemeFormData)
  }
    //calls updateMemeFormData action on that data
  handleOnSubmit(event) {
    event.preventDefault()
    console.log(this.props)
    this.props.createMeme(this.props.memeFormData)
  }

  //calls createMeme action using new props
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
