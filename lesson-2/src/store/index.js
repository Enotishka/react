import { combineReducers, compose, createStore } from "redux";
import { chatReducer } from "./chat/reducer";
import { profileReducer } from "./profile/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatReducer,
});
export const store = createStore(rootReducer, composeEnhancers());
