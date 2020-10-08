import React from "react";
import { postArray } from "../utils/DummyData";
import Feed from "../components/Feed";
import ProfileCover from "../components/ProfileCover";

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  return (
    <Feed
      posts={postArray}
      headerComponent={<ProfileCover user={user}/>}
      navigation={navigation}
    />
  );
};

export default ProfileScreen;
