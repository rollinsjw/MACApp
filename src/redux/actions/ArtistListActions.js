import { HANDICAP_ACCESSIBLE, OPEN_FRIDAY, SORT_BY_NAME, DRAWING_PAPER,
CLAY_AND_WOOD,
DIGITAL_ARTS,
FIBER_ARTS,
JEWELRY_AND_GLASS,
MIXED_MEDIA,
PAINTING,
PRINT_MAKING
} from '../utility/Constants';

export function sortByName(x) {
  return {
    type: SORT_BY_NAME,
    payload: x
  }
}

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
