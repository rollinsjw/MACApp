import { SORT_BY_NAME, HANDICAP_ACCESSIBLE, OPEN_FRIDAY } from '../utility/Constants';

export function sortByName() {
  return {
    type: SORT_BY_NAME
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
