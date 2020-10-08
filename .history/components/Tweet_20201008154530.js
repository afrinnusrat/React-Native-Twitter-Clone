import React, { useState } from "react";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { format } from "timeago.js";

const Container = styled.View`
  flex-direction: row;
  margin:10px
`;

const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const PostContainer = styled.View`
  margin-left: 10px;
  flex: 1;
`;

const PostInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DisplayName = styled.Text`
    font-weight:bold
    font-size:16px;
    margin-right:5px
`;

const InfoText = styled.Text`
  color: gray;
`;

const Desc = styled.Text`
  font-size: 15px;
`;

const Photo = styled.Image`
  margin-top: 10px;
  width: 100%;
  height: 160px;
  border-radius: 15px;
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

const Tweet = ({ item, navigation }) => {
  const [liked, setLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(item.likes);
  const handleLike = () => {
    setLikeCounter(liked ? likeCounter - 1 : likeCounter + 1);
    setLiked(!liked);
  };
  return (
    <>
      <Container>
        <ProfilePicture source={{ uri: item.user.profilePicture }} />
        <PostContainer>
          <PostInfo>
            <DisplayName onPress={()=>navigation.navigate("Profile", {user:item.user})}>{item.user.displayName}</DisplayName>
            <InfoText>@{item.user.username}</InfoText>
            <Entypo name="dot-single" size={15} color="gray" />
            <InfoText>{format(item.date)}</InfoText>
          </PostInfo>
          <Desc>{item.desc}</Desc>
          {item.photo && <Photo source={{ uri: item.photo }} />}
          <IconsContainer>
            <IconContainer>
              <FontAwesome name="comment-o" size={18} color="gray" />
              <CounterText>{item.comments}</CounterText>
            </IconContainer>
            <IconContainer>
              <MaterialCommunityIcons
                name="twitter-retweet"
                size={23}
                color="gray"
              />
              <CounterText>{item.retweets}</CounterText>
            </IconContainer>
            <IconContainer onPress={handleLike}>
              {liked ? (
                <AntDesign name="heart" size={18} color="red" />
              ) : (
                <AntDesign name="hearto" size={18} color="gray" />
              )}

              <CounterText>{likeCounter}</CounterText>
            </IconContainer>
            <Feather name="share-2" size={18} color="gray" />
          </IconsContainer>
        </PostContainer>
      </Container>
      <Seperator />
    </>
  );
};

export default Tweet;
