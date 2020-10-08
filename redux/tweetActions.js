import tweetActionTypes from "./tweetActionTypes";

export const AddNewTweet = (post) => ({
  type: tweetActionTypes.ADD_NEW_TWEET,
  payload: post,
});
