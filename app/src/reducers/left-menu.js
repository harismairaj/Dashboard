import {LEFT_MENU} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LEFT_MENU:
      return action.payload;
  }
  return state;
};
