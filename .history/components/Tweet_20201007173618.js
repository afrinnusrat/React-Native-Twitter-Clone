import React from "react";
import Styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

const Container = Styled.View`
    flex-direction:row;
    margin:10px 10px;
`;

const ProfilePicture = Styled.Image`
    width:50px;
    height:50px;
    border-radius:50px
`;

const PostContainer = Styled.View`
    margin-left:10px
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
`;

const Photo = Styled.Image`
margin-top:10px;
    width:100%;
    height:250px
`;

const Tweet = ({ item }) => {
  console.log(item);
  return (
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
      </PostContainer>
    </Container>
  );
};

export default Tweet;
