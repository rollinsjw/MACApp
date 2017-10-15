var artists = require('../../data/artists.json');
import _ from 'lodash';
import {HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME} from '../utility/Constants';

const INITIAL_STATE = artists

export default (state = INITIAL_STATE, action) =>{
  switch(action.type) {
    case SORT_BY_NAME:
      return _.sortBy(INITIAL_STATE, "Last Name")
    case OPEN_FRIDAY:
      return _.map(INITIAL_STATE, (val, id) => {
        if(val["Open FRIDAY?"] == "Yes"){
          return {...val}
        }
      });
    case HANDICAP_ACCESSIBLE:
      return _.map(INITIAL_STATE, (val, id) => {
        if(val["W/chair Accessible?"] == "Yes"){
          return {...val}
        }
      });
    default:
      return state;
  }
}
