import React from 'react';

const initialState = {
  count: 0,
  arrMovies: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {...state, count: action.payload};
    case 'minus':
      return {...state, count: action.payload};
    case 'MovieData':
      console.log('MovieData reducer', action.payload);
      return {...state, arrMovies: action.payload};
    default:
      return state;
  }
};
