
const INITIAL_STATE = {
  artists: {
    john: {
      medium : 'oil',
      location: 'georgia'
    }
  }
}

export default (state = INITIAL_STATE, action) =>{
  switch(action.type) {
    default:
      return state;
  }
}
