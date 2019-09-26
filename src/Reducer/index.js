import {combineReducers} from 'redux';
import FirstReducer from './FirstReducer';

export default combineReducers({
  myreducer: FirstReducer,
});
