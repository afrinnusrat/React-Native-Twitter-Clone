import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex:1;
  background-color:coral
`;

const TextArea = styled.TextInput`
width:100px;
height:100px;
`;

const NewScreen = () => {
  return (
    <Container>
      <TextArea autoFocus/>
    </Container>
  );
};

export default NewScreen;
