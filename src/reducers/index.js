import { combineReducers } from 'redux';
import Questions from './QuestionsReducer';
import Answers from './AnswersReducer';
import Submit from './SubmitReducer';
import Result from './ResultReducer';

const rootReducer = combineReducers({
  questions : Questions,
  answers : Answers,
  submitted : Submit,
  result : Result
});

export default rootReducer;
