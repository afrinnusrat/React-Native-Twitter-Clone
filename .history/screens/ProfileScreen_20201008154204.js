import React from "react";
import styled from "styled-components/native";
import { postArray } from "../utils/DummyData";
import Feed from "../components/Feed";
import ProfileCover from "../components/ProfileCover";

const Container = styled.View`
  flex: 1;
  padding: 0px 10px 10px 10px;
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
