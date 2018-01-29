import _ from 'lodash';
import firebase from 'firebase';
import { HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME, DRAWING_PAPER,
CLAY_AND_WOOD,
DIGITAL_ARTS,
FIBER_ARTS,
JEWELRY_AND_GLASS,
MIXED_MEDIA,
PAINTING,
PRINT_MAKING,
PHOTOGRAPH_AND_VIDEO,
SCULPTURE_AND_METAL,
PULL_SUCCESS,
} from '../utility/Constants';


const INITIAL_STATE = []


export default (state = INITIAL_STATE, action) =>{
  console.log('action type')
  console.log(action.type)
  switch(action.type) {


    case PULL_SUCCESS:
      INITIAL_STATE = action.payload
      console.log(INITIAL_STATE)
      INITIAL_STATE.map(function(value, i){
        firebase.storage().refFromURL(value["Img"]).getDownloadURL().then((url) => {
            // value["Img"] = url
            INITIAL_STATE[i]["Img"] = url
        })
      })
      // return _.filter(temp, (val) =>{
      //   return (val["Last Name"].startsWith(action.payload) || val["Last Name"].startsWith(action.payload.toLowerCase()))
      // });
      //

    case SORT_BY_NAME:
        var temp = _.sortBy(INITIAL_STATE, "Last Name")
        return _.filter(temp, (val) =>{
          // console.log(val["Img"])
          return val["Last Name"].startsWith(action.payload)
        });
    case OPEN_FRIDAY:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["Open FRIDAY?"] === "Yes"
      });
    case HANDICAP_ACCESSIBLE:
      return _.filter(INITIAL_STATE, (val, id) => {
        return val["chair Accessible?"] === "Yes"
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
        return val["medium"].includes("PRINTMAKING")
      });
    case PHOTOGRAPH_AND_VIDEO:
      return _.filter(INITIAL_STATE, (val, id) => {
          return val["medium"].includes("PHOTOGRAPHY")
      });
    case SCULPTURE_AND_METAL:
      return _.filter(INITIAL_STATE, (val, id) => {
          return (val["medium"].includes("SCULPTURE") || val["medium"].includes("METAL"))
      });
    default:
      return state;
  }
}
