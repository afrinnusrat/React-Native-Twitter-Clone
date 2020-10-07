import React from "react";
import Styled from "styled-components";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Container = Styled.View`
    flex-direction:row;
    margin-top:10px;
    margin-bottom:10px;
`;

const ProfilePicture = Styled.Image`
    width:50px;
    height:50px;
    border-radius:50px
`;

const PostContainer = Styled.View`
    margin-left:10px;
    flex:1
`;

const PostInfo = Styled.View`
    flex-direction:row;
    align-items:center
`;

const DisplayName = Styled.Text`
    font-weight:bold
    font-size:16px;
    margin-right:5px
`;

const InfoText = Styled.Text`
    color:gray
`;

const Desc = Styled.Text`
    font-size:15px;
`;

const Photo = Styled.Image`
margin-top:10px;
    width:100%;
    height:160px;
    border-radius:15px
`;

const Seperator = Styled.View`
    width:100%;
    height:1px;
    background-color:lightgray;
    margin:10px;

`;

const IconContainer = Styled.View`
    margin-top:10px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between
`;

const Tweet = ({ item }) => {
  return (
    <>
      <Container>
        <ProfilePicture source={{ uri: item.user.profilePicture }} />
        <PostContainer>
          <PostInfo>
            <DisplayName>{item.user.displayName}</DisplayName>
            <InfoText>@{item.user.username}</InfoText>
            <Entypo name="dot-single" size={15} color="gray" />
            <InfoText>{item.date}</InfoText>
          </PostInfo>
          <Desc>{item.desc}</Desc>
          {item.photo && <Photo source={{ uri: item.photo }} />}
          <IconContainer>
            <FontAwesome name="comment-o" size={24} color="black" />
            <MaterialCommunityIcons
              name="twitter-retweet"
              size={30}
              color="black"
            />
            <AntDesign name="hearto" size={24} color="black" />
            <Feather name="share-2" size={24} color="black" />
          </IconContainer>
        </PostContainer>
      </Container>
      <Seperator />
    </>
  );
};

export default Tweet;
