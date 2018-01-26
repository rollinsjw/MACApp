import _ from 'lodash';
import { HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME, DRAWING_PAPER,
CLAY_AND_WOOD,
DIGITAL_ARTS,
FIBER_ARTS,
JEWELRY_AND_GLASS,
MIXED_MEDIA,
PAINTING,
<<<<<<< HEAD
PRINT_MAKING,
PHOTOGRAPH_AND_VIDEO,
SCULPTURE_AND_METAL
} from '../utility/Constants';

import artists from '../../data/artists';
=======
PULL_SUCCESS,
PRINT_MAKING
} from '../utility/Constants';
//import artists from '../../data/artists';
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7

const INITIAL_STATE = artists


export default (state = INITIAL_STATE, action) =>{
  switch(action.type) {
<<<<<<< HEAD
    case SORT_BY_NAME:
=======
    case PULL_SUCCESS:
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
      console.log(action.payload)
      var temp = _.sortBy(INITIAL_STATE, "Last Name")

      return _.filter(temp, (val) =>{
<<<<<<< HEAD
        return (val["Last Name"].startsWith(action.payload) || val["Last Name"].startsWith(action.payload.toLowerCase()))
=======
        return val["Last Name"].startsWith(action.payload)
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
      });
    case OPEN_FRIDAY:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["Open FRIDAY?"] === "Yes"
      });
    case HANDICAP_ACCESSIBLE:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["W/chair Accessible?"] === "Yes"
      });
    case CLAY_AND_WOOD:
      return _.filter(INITIAL_STATE, (val, id) => {
        return (val["medium"].includes("CLAY") || val["medium"].includes("WOOD"))
      });
    case DIGITAL_ARTS:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["medium"].includes("PHOTOGRAPHY")
      });
    case DRAWING_PAPER:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["medium"].includes("DRAWING")
      });
    case FIBER_ARTS:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["medium"].includes("FIBER")
      });
    case JEWELRY_AND_GLASS:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["medium"].includes('JEWELRY')
      });
    case MIXED_MEDIA:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["medium"].includes("MEDIA")
      });
    case PAINTING:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["medium"].includes("PAINTING")
      });
    case PRINT_MAKING:
      return _.filter(INITIAL_STATE, (val, id) => {
<<<<<<< HEAD
        return val["medium"].includes("PRINTMAKING")
      });
    case PHOTOGRAPH_AND_VIDEO:
      return _.filter(INITIAL_STATE, (val, id) => {
          return val["medium"].includes("PHOTOGRAPHY")
      });
    case SCULPTURE_AND_METAL:
      return _.filter(INITIAL_STATE, (val, id) => {
          return (val["medium"].includes("SCULPTURE") || val["medium"].includes("METAL"))
      })
=======
        return val["medium"].includes("PRINT")
      });
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
    default:
      return state;
  }
}
