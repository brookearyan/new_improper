import { resetMemeForm } from './memeForm';

const API_URL = 'http://localhost:9393/api/v1';

export const setMemes = memes => {
  return {
    type: 'GET_MEMES_SUCCESS',
    memes
  }
}

const addMeme = meme => {
  return {
    type: 'CREATE_MEME_SUCCESS',
    meme
  }
}

export const getMemes = () => {
  return dispatch => {
    return fetch(`${API_URL}/memes`)
      .then(response => response.json())
      .then(memes => dispatch(setMemes(memes)))
      .catch(error => console.log(error));
  }
}

export const createMeme = meme => {
  return dispatch => {
    return fetch(`${API_URL}/memes`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(meme)
    })
      .then(response => response.json())
      .then(meme => {
        dispatch(addMeme(meme))
        dispatch(resetMemeForm())
        console.log(meme)
    })
    .catch(error => console.log(error))
  }
}
