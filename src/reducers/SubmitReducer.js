import {SUBMIT_FORM, CLEAR_FORM} from '../actions/index';

export default(state = false, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return true;
      break;
    case CLEAR_FORM:
      return false;
      break;
    default:
      return state;
  }
}
