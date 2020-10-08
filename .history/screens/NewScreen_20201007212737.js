import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
`;

const TextArea = styled.View`
  flex-direction: row;
`;

const ProfilePicture = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const TextInput = styled.TextInput``;

const NewScreen = () => {
  return (
    <Container>
      <TextArea>
        <ProfilePicture
          source={{
            uri:
              "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
        <TextInput autoFocus />
      </TextArea>
    </Container>
  );
};

export default NewScreen;
