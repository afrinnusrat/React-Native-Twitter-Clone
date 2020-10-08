import React from "react";
import styled from "styled-components/native";
import { postArray } from "../utils/DummyData";

const Container = styled.View`
  flex: 1;
  background-color: coral;
`;

const CoverPhoto = styled.Image`
  width: 100%;
  height: 200px;
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
    </Container>
  );
};

export default ProfileScreen;
