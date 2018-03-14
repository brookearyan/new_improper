import React from 'react';
import PropTypes from 'prop-types';

export class Modal extends React.Component {
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
        <div className="modal">
          <div className="close-button">
            <button onClick={this.props.onClose}>
              x
            </button>
          </div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};


export default Modal;
