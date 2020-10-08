import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color:white
`;

const TextArea = styled.View`
  padding: 10px;
  flex-direction: row;
`;

const ProfilePicture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const TextInput = styled.TextInput`
  margin-left: 10px;
  font-size: 18px;
`;

const Seperator = styled.View`
    width:100%;
    height:1px;
    background-color:lightgray;
    margin:10px;
`;

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
        <TextInput autoFocus placeholder="What's happening?" />
      </TextArea>
      <Seperator/>
      <Seperator/>
    </Container>
  );
};

export default NewScreen;
