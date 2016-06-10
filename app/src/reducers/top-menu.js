import {TOP_MENU} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case TOP_MENU:
      return action.payload;
  }
  return state;
};
