import React from 'react';

//presentational component

export class MemeFormJSX extends React.Component {
  render() {
    const { alias, one, two, three, four, five } = this.props.memeFormData;

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
