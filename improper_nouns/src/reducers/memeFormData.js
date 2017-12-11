const initialState = {
  id: 0,
  alias: '',
  one: '',
  two: '',
  three: '',
  four: '',
  five: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.memeFormData;

    case 'RESET_MEME_FORM':
      return initialState;

    default:
      return state;
  }
}
