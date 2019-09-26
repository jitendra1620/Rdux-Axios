import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import Reducer from './src/Reducer';

export const store = createStore(
  Reducer,
  {},
  compose(applyMiddleware(ReduxThunk)),
);
