import React from 'react';

//presentational component

export const MemeForm extends React.Component {
  render() {

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
            value={this.props.alias}
          />
        </div>
        <div>
          <label htmlFor="one">your five nouns...</label><br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="one"
            value={this.props.one}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="two"
            value={this.props.two}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="three"
            value={this.props.three}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="four"
            value={this.props.four}
          />
          <br />
          <input
            type="text"
            onChange={this.handleOnChange}
            name="five"
            value={this.props.five}
          />
          </div>
           <button onSubmit={this.handleOnSubmit} id="share-button" type="submit">share</button>
        </form>
      </div>
    )
  }
}
