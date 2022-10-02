import { CHANGE_NAME, TOGGLE_PROFILE } from "./actions";

const initialState = {
  name: "User",
  visible: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.value };
    case TOGGLE_PROFILE:
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};
