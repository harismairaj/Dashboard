import {FETCH_BRAND} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_BRAND:
      return action.payload;
  }
  return state;
};
