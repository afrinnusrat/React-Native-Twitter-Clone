import React from "react";
import { postArray } from "../utils/DummyData";
import Feed from "../components/Feed";
import ProfileCover from "../components/ProfileCover";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: white;
`;

const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  return (
    <Container>
      <Feed
        posts={postArray}
        headerComponent={<ProfileCover user={user} />}
        navigation={navigation}
      />
    </Container>
  );
};

export default ProfileScreen;
