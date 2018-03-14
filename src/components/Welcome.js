
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { toggleWelcomeBox } from '../containers/App'

export class Welcome extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="welcome-modal">
          <h1 className="welcome"> welcome! </h1>
          <p className="welcome-message">
           <strong>share haikus with our community now. </strong><br /><br />
           just click the + button and select five nouns
           which best describe your current situation,
           as well as a one-time alias.<br /><br />
           <strong>be funny. be creative. be interesting.</strong><br /><br />
           in the case you do not know what a noun is,
           please reallocate your social media time to personal growth endeavors.
           <br /><br />
          </p>
          <button onClick={this.props.onClose}
            className="enter-button">
            enter
          </button>
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Welcome;
