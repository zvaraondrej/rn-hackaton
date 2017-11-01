import * as types from "./../actions/main.constants";

export default (
  state = {
    text: ""
  },
  action
) => {
  switch (action.type) {
    case types.HELLO_WORLD:
      return {
        ...state,
        text: action.text
      };

      break;
    default:
      return state;
  }
};
