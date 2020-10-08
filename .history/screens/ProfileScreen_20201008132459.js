import React from "react";
import styled from "styled-components/native";
import { postArray } from "../utils/DummyData";
import { FontAwesome } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  background-color: coral;
`;

const CoverPhoto = styled.Image`
  width: 100%;
  height: 100px;
`;

const ProfilePhoto = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  top: 60px;
  margin-left: 10px;
`;

const IconsContainer = styled.View`
  flex-direction: row;
`;

const ProfileScreen = ({ route }) => {
  const { user } = route.params;
  return (
    <Container>
      <CoverPhoto
        source={{
          uri:
            "https://images.pexels.com/photos/5037913/pexels-photo-5037913.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        }}
      />
      <ProfilePhoto
        source={{
          uri: user.profilePicture,
        }}
      />
      <IconsContainer>
        <FontAwesome name="envelope-o" size={24} color="black" />
      </IconsContainer>
    </Container>
  );
};

export default ProfileScreen;
