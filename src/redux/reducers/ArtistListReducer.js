import _ from 'lodash';
import { HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME, DRAWING_PAPER,
CLAY_AND_WOOD,
DIGITAL_ARTS,
FIBER_ARTS,
JEWELRY_AND_GLASS,
MIXED_MEDIA,
PAINTING,
PRINT_MAKING
} from '../utility/Constants';
import artists from '../../data/artists';

const INITIAL_STATE = artists


export default (state = INITIAL_STATE, action) =>{
  switch(action.type) {
    case SORT_BY_NAME:
      console.log(action.payload)
      var temp = _.sortBy(INITIAL_STATE, "Last Name")

      return _.filter(temp, (val) =>{
        return val["Last Name"].startsWith(action.payload)
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
        return val["medium"].includes("PRINT")
      });
    default:
      return state;
  }
}
