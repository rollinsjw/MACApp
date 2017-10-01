import { combineReducers } from 'redux';
import ArtistListReducer from './ArtistListReducer';
import NavigationReducer from './NavigationReducer';

export default combineReducers({
  artistList: ArtistListReducer,
  nav: NavigationReducer
})
