import { createStore } from "redux";
import { combineReducers } from "redux";
import tweetReducer from "./tweetReducer";

// const rootReducer = combineReducers({
//     auth: authReducer,
//     user: userReducer,
//     post: postReducer,
//     category: categoryReducer,
//   });

export const store = createStore(tweetReducer);
