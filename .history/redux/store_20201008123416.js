import { createStore } from "redux";
import tweetReducer from "./tweetReducer";

export const store = createStore(tweetReducer);
