var artists = require('../../data/artists.json');
const INITIAL_STATE = artists

export default (state = INITIAL_STATE, action) =>{
  switch(action.type) {
    default:
      return state;
  }
}
