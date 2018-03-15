
const API_URL = 'http://localhost:9393/api/v1';

const addLike = meme => {
  return {
    type: 'LIKE_ADDED',
    meme
  }
}

export const createLike = meme => {
  return dispatch => {
    return fetch(`${API_URL}/memes/${meme.id}/likes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(meme)
    })
    .then(response => response.json())
    .then(meme => {
      dispatch(addLike(meme))
      console.log(meme)
    })
  }
}
// plain js obj with a type, gets passed as arg in reducer
// const resetLikes = meme => {
//   return {
//     type: 'LIKES_RESET',
//     meme
//   }
// }
// export const updateLikes = meme => {
//   return dispatch => {
//     return fetch(`${API_URL}/memes/${meme.id}/likes`)
//       .then(response => response.json())
//       .then(memes => dispatch(resetLikes(meme)))
//       .catch(error => console.log(error));
//   }
// }
