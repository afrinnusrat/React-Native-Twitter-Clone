import React from "react";
import styled from "styled-components/native";
import { postArray } from "../utils/DummyData";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
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
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
`;

const FollowButton = styled.TouchableOpacity`
  padding: 5px 10px 5px 10px;
  background-color: #4d9fec;
  border-radius: 20px;
  margin-left: 5px;
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
        <FontAwesome name="envelope-o" size={24} color="#4d9fec" />
        <FontAwesome name="bell-o" size={24} color="#4d9fec" style={{marginLeft:5px}}/>
        <FollowButton>
          <Text style={{ color: "white", fontWeight: "bold" }}>Follow</Text>
        </FollowButton>
      </IconsContainer>
    </Container>
  );
};

export default ProfileScreen;
