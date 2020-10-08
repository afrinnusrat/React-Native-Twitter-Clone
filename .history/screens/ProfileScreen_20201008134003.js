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

const DisplayName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 5px;
`;

const Username = styled.Text`
  color: gray;
  margin-left: 5px;
`;

const UserInfoContainer = styled.View`
  margin: 10px;
`;

const UserInfoItem = styled.View`
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
        <FontAwesome name="envelope-o" size={24} color="#4d9fec" />
        <FontAwesome
          name="bell-o"
          size={24}
          color="#4d9fec"
          style={{ marginLeft: 10 }}
        />
        <FollowButton>
          <Text style={{ color: "white", fontWeight: "bold" }}>Follow</Text>
        </FollowButton>
      </IconsContainer>
      <DisplayName>{user.displayName}</DisplayName>
      <Username>@{user.username}</Username>
      <UserInfoContainer>
        <UserInfoItem>
          <FontAwesome name="chain" size={14} color="black" />
          <Text style={{color:"#4d9fec"}}>instagram.com/safak.k</Text>
        </UserInfoItem>
        <UserInfoItem>
          <FontAwesome name="chain" size={24} color="black" />
          <Text>Joined September 2020</Text>
        </UserInfoItem>
      </UserInfoContainer>
    </Container>
  );
};

export default ProfileScreen;
