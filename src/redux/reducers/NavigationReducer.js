import { AppNavigator } from '../../config/router';


const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams()
);

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
