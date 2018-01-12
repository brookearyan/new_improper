import { resetMemeForm } from './memeForm';

//async functions

const API_URL = 'http://localhost:9393/api/v1';

const setMemes = memes => {
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

const dateFormatter = (meme) => {
    const months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    }

    let date_time = meme.created_at
    let formatted = date_time.split('-')
    let year = formatted[0]
    let month = formatted[1]
    let day = formatted[2].substr(0, 2)
    let str_month = months[month]
    let new_date = str_month + " " + day + ", " + year

    meme["created_at"] = new_date;
    return meme["created_at"]
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
