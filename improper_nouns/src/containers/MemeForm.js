import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMemeFormData } from '../actions/memeForm';
import { createMeme } from '../actions/memes';
import { MemeFormJSX } from '../components/MemeFormJSX'

//stateless Component
//connected to redux store, receives state updates & dispatch actions
//does not render

class MemeForm extends Component {

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
    return (
      <MemeForm />
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
