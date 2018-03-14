
export const updateMemeFormData = memeFormData => {
  return {
    type: 'UPDATED_DATA',
    memeFormData
  }
}

export const resetMemeForm = () => {
  return {
    type: 'RESET_MEME_FORM'
  }
}
