import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: white;
`;

const UserInfo = styled.View`
  flex-direction: row;
`;

const ProfilePicture = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

const Names = styled.View`
  margin: 10px;
`;

const Desc = styled.Text`
  font-size: 15px;
`;

const PostInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Seperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin: 10px;
`;

const PostScreen = ({ route }) => {
  const { item } = route.params;

  console.log(item);
  return (
    <Container>
      <UserInfo>
        <ProfilePicture
          source={{
            uri:
              "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
        <Names>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {item.user.displayName}
          </Text>
          <Text style={{ color: "gray" }}>@{item.user.username}</Text>
        </Names>
      </UserInfo>
      <Desc>{item.desc}</Desc>
      <PostInfo>
        <Text style={{ color: "gray", fontSize: 12 }}>7.41 PM</Text>
        <Entypo name="dot-single" size={12} color="gray" />
        <Text style={{ color: "gray", fontSize: 12 }}>08 Oct 20</Text>
        <Text
          style={{
            color: "#4d9fec",
            fontSize: 13,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Twitter for android
        </Text>
      </PostInfo>
      <Seperator />
      <PostInfo>
        <Text style={{ fontWeight: "bold" }}>28</Text>
        <Text style={{ color: "gray" }}>Likes</Text>
      </PostInfo>
      <Seperator />
    </Container>
  );
};

export default PostScreen;
