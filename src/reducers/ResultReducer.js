import {SUBMIT_FORM, CLEAR_FORM} from '../actions/index';

export default(state = {isSuccess : false , correct : 0, incorrect : 0}, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return action.payload;
      break;
    case CLEAR_FORM:
      return {isSuccess : false , correct : 0, incorrect : 0};
      break;
    default:
      return state;
  }
}
