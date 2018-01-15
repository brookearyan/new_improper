import React, { Component } from 'react';

//stateless presentational component
//renders welcome page

export class Welcome extends Component {
  render() {
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
          <button className="enter-button">
            enter
          </button>
        </div>
      </div>
    )
  }
}
// this.toggleWelcomeBox.bind(this);


// toggleWelcomeBox() {
//   this.setState({
//     welcomeOpen: !this.state.welcomeOpen
//   });
// }
// Welcome.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool,
//   children: PropTypes.node
// };
// constructor(props) {
//   super(props);
//   this.state = { welcomeOpen: true };
// }
export default Welcome;
