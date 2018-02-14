import React from 'react';

export class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const likedStyle = {
      color: 'red'
    }
    const initialStyle = {
      color: 'black'
    }
    const style = this.state.liked ? initialStyle : likedStyle ;
    return (
      <div className="likes">
        <button className="heart" onClick={this.handleClick}>
          <img src="https://image.flaticon.com/icons/svg/60/60993.svg"/>
        </button>
      </div>
    );
  }
}

export default LikeButton;

// const likedStyle = {
//   color: 'red'
// }
// const initialStyle = {
//   color: 'black'
// }
// const text = this.state.liked ? 'liked' : 'haven\'t liked';
// const label = this.state.liked ? 'Unlike' : 'Like'
// return (
//   <div className="customContainer">
//     <button className="btn btn-primary" onClick={this.handleClick}>
//       {label}</button>
//     <p>
//       you {text} this. Click to toggle.
//     </p>
//   </div>
// );
// }
// }
