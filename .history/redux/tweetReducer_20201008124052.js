import tweetActionTypes from "./tweetActionTypes";
import { postArray } from "../utils/DummyData";

const initiaState = {
  posts: postArray,
};

const tweetReducer = (state = initiaState, action) => {
  switch (action.type) {
    case tweetActionTypes.ADD_NEW_TWEET:
      return {
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default tweetReducer;
