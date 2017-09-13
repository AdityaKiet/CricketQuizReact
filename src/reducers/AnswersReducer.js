import { SELECT_OPTION, CLEAR_FORM } from '../actions/index';

export default(state = {}, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      const {option, id} = action.payload;
      return {...state, [id] : option };
      break;
    case CLEAR_FORM:
      return {};
      break;
    default:
      return state;
  }
}
