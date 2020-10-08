import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

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
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Safak</Text>
          <Text style={{ color: "gray" }}>@safak.k</Text>
        </Names>
      </UserInfo>
      <Desc>{item.desc}</Desc>
    </Container>
  );
};

export default PostScreen;
