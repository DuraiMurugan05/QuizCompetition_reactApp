import {combineReducers} from 'redux';
import QuestionReducer from "./reducers_questions.js";

const rootReducer=combineReducers({
    questions:QuestionReducer
});

export default rootReducer;