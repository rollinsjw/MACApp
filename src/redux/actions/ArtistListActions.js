<<<<<<< HEAD
=======
import firebase from 'firebase';
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
import { HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME, DRAWING_PAPER,
CLAY_AND_WOOD,
DIGITAL_ARTS,
FIBER_ARTS,
JEWELRY_AND_GLASS,
MIXED_MEDIA,
PAINTING,
PRINT_MAKING,
<<<<<<< HEAD
SCULPTURE_AND_METAL,
PHOTOGRAPH_AND_VIDEO
=======
PULL_SUCCESS
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
} from '../utility/Constants';

export function sortByName(x) {
  return {
    type: SORT_BY_NAME,
    payload: x
  }
}
<<<<<<< HEAD

=======
export function pullData() {
  return (dispatch) => {
     firebase.database().ref('/Artists/')
       .on('value', snapshot => {
         dispatch({ type: PULL_SUCCESS, payload: snapshot.val() });
       });
   };
}
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
export function handicapAccessible() {
  return {
    type: HANDICAP_ACCESSIBLE
  }
}

export function openFriday() {
  return {
    type: OPEN_FRIDAY
  }
}

export function clayAndWood() {
  return {
    type: CLAY_AND_WOOD
  }
}
export function digitalArts() {
  return {
    type: DIGITAL_ARTS
  }
}
export function drawingAndPaper() {
  return {
    type: DRAWING_PAPER
  }
}
export function fiberArts() {
  return {
    type: FIBER_ARTS
  }
}
export function jewelryAndGlass() {
  return {
    type: JEWELRY_AND_GLASS
  }
}
export function mixedMedia() {
  return {
    type: MIXED_MEDIA
  }
}
export function painting() {
  return {
    type: PAINTING
  }
}
export function printmaking() {
  return {
    type: PRINT_MAKING
  }
}
<<<<<<< HEAD
export function sculptureAndMetal() {
  return {
    type: SCULPTURE_AND_METAL
  }
}
export function photographAndVideo() {
  return {
    type: PHOTOGRAPH_AND_VIDEO
  }
}
=======
>>>>>>> a622a84fa9b65a4b43e8645addefe35ee1624fe7
