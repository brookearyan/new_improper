
export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MEMES_SUCCESS':
      return action.memes;

    case 'CREATE_MEME_SUCCESS':
      return [...state, action.meme]

    default:
      return state;
  }
}
