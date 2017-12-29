

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMemes } from '../actions/memes';

const MemeList = ({ meme }) => (
  <article key={meme.id}>
    <div>
      <h3>by, {meme.alias}</h3>
    </div>
    <p>{meme.one}</p>
    <p>{meme.two}</p>
    <p>{meme.three}</p>
    <p>{meme.four}</p>
    <p>{meme.five}</p>
  </article>
);

class Memes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      memes: []
    }
  }
  componentDidMount(){
    this.props.getMemes()
  }



  render() {
    const memes = this.props.memes.map(meme => {
      return <MemeList key={meme.id} meme={meme}/>
    })
    return (
      <div className="meme-container">
        {memes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    memes: state.memes
  })
}

export default connect(mapStateToProps, { getMemes })(Memes);
//
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter as Route, Router } from 'react-router-dom';
//
// import MemeArticle from '../components/MemeArticle';
// import MemeForm from './MemeForm';
// import Meme from '../components/Meme';
// import { getMemes } from '../actions/memes';
//
// class Memes extends Component {
//
//   componentDidMount() {
//     this.props.getMemes()
//   }
//
//   render() {
//     const memes = this.props;
//
//     return (
//       <div>
//         <Router>
//           <Route path="/new" component={MemeForm} />
//           <Route exact path="/" render={() => (
//             <div className="MemesContainer">
//               <h1>Memes</h1>
//               {memes.map(meme => <MemeArticle key={meme.id} meme={meme} />)}
//             </div>
//           )} />
//         </Router>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) => {
//   return ({
//     memes: state.memes
//   })
// }
//
//  export default connect(mapStateToProps, { getMemes })(Memes);
