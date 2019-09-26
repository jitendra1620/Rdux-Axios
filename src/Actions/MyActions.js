export const plus = digit => dispatch => {
  digit = digit + 1;
  dispatch({type: 'plus', payload: digit});
};

export const minus = digit => dispatch => {
  if (digit <= 0) {
    digit = 0;
  } else {
    digit = digit - 1;
  }
  dispatch({type: 'minus', payload: digit});
};

export const getMovieData = data => dispatch => {
  dispatch({type: 'MovieData', payload: data});
};
