import React from "react";
import Styled from "styled-components";

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
    flex-direction:row
`;

const DisplayName = Styled.Text`
    font-weight:bold
`;

const Tweet = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <ProfilePicture source={{ uri: item.user.profilePicture }} />
      <PostContainer>
        <PostInfo>
          <DisplayName>{item.user.displayName}</DisplayName>
        </PostInfo>
      </PostContainer>
    </Container>
  );
};

export default Tweet;
