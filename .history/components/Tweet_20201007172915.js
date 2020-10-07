import React from "react";
import Styled from "styled-components";
import { Entypo } from '@expo/vector-icons';

const Container = Styled.View`
    width:100%;
    flex-direction:row
`;

const ProfilePicture = Styled.Image`
    width:50px;
    height:50px;
    border-radius:50px
`;

const PostContainer = Styled.View`

`;

const PostInfo = Styled.View`
    flex-direction:row;
    align-items:center
`;

const DisplayName = Styled.Text`
    font-weight:bold
`;

const InfoText = Styled.Text`
    color:gray
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
          <Entypo name="dot-single" size={24} color="black" />
          <InfoText>{item.date}</InfoText>
        </PostInfo>
      </PostContainer>
    </Container>
  );
};

export default Tweet;
