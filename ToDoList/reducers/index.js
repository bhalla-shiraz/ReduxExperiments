import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoReducer = combineReducers({
 todos,
 visibilityFilter
});

export default todoReducer
