var artists = require('../../data/artists.js');
import _ from 'lodash';
import {HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME} from '../utility/Constants';

const INITIAL_STATE = artists

export default (state = INITIAL_STATE, action) =>{
  switch(action.type) {
    case SORT_BY_NAME:
      return _.sortBy(INITIAL_STATE, "Last Name")
    case OPEN_FRIDAY:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["Open FRIDAY?"] === "Yes"
      });
    case HANDICAP_ACCESSIBLE:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["W/chair Accessible?"] === "Yes"
      });
    default:
      console.log(state);
      return state;
  }
}
