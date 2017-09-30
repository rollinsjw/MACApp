import { combineReducers } from 'redux';
import ArtistListReducer from './ArtistListReducer';

export default combineReducers({
  artistList: ArtistListReducer
})
