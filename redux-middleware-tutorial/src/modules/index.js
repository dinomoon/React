import { combineReducers } from 'redux';
import counter from './counter';
import sample from './sample';
import posts from './posts';

const rootReducer = combineReducers({
  counter,
  sample,
  posts,
});

export default rootReducer;
