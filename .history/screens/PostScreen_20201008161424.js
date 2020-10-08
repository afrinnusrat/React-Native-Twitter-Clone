import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

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

const IconsContainer = styled.View`
  width: 80%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const CounterText = styled.Text`
  margin-left: 5px;
  color: gray;
`;

const PostScreen = ({ route }) => {
  const { item } = route.params;
  const [liked, setLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(item.likes);
  const handleLike = () => {
    setLikeCounter(liked ? likeCounter - 1 : likeCounter + 1);
    setLiked(!liked);
  };
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
        <Text style={{ fontWeight: "bold" }}>{likeCounter}</Text>
        <Text style={{ color: "gray", marginLeft: 5 }}>Likes</Text>
      </PostInfo>
      <Seperator />
      <IconsContainer>
            <IconContainer>
              <FontAwesome name="comment-o" size={20} color="gray" />
            </IconContainer>
            <IconContainer>
              <MaterialCommunityIcons
                name="twitter-retweet"
                size={23}
                color="gray"
              />
            </IconContainer>
            <IconContainer onPress={handleLike}>
              {liked ? (
                <AntDesign name="heart" size={20} color="red" />
              ) : (
                <AntDesign name="hearto" size={20} color="gray" />
              )}
            </IconContainer>
            <Feather name="share-2" size={20} color="gray" />
          </IconsContainer>
      <Seperator />
    </Container>
  );
};

export default PostScreen;
