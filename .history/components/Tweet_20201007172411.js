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

const Tweet = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <ProfilePicture source={{ uri: item.user.profilePicture }} />
    </Container>
  );
};

export default Tweet;
