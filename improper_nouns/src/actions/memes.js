import { resetMemeForm, updateMemeFormData } from './memeForm';

//async functions

const API_URL = 'http://localhost:9393/api/v1';
//called in getMemes
const setMemes = memes => {
  return {
    type: 'GET_MEMES_SUCCESS',
    memes
  }
}
//called in createMeme
const addMeme = meme => {
  return {
    type: 'CREATE_MEME_SUCCESS',
    meme
  }
}
//called in createLike
const addLike = meme => {
  return {
    type: 'LIKE_ADDED',
    meme
  }
}
//called in createLike
const updateMeme = meme => {
  return {
    type: 'MEME_UPDATED',
    meme
  }
}
//fetches all memes
export const getMemes = () => {
  return dispatch => {
    return fetch(`${API_URL}/memes`)
      .then(response => response.json())
      .then(memes => dispatch(setMemes(memes)))
      .catch(error => console.log(error));
  }
}
//POST req for meme
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
//PUT req for meme
export const createLike = meme => {
  return dispatch => {
    return fetch(`${API_URL}/memes/${meme.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(meme)
    })
    .then(response => response.json())
    .then(meme => {
      dispatch(addLike(meme))
      dispatch(updateMemeFormData(meme))
      console.log(meme)
    })
  }
}
