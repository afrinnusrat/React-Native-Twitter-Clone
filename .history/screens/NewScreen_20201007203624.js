import React from "react";
import Styled from "styled-components";

const Container = Styled.View`
  flex:1;
  width:100px;
  height:100px;
  color:coral;
`;

const TextArea = Styled.TextInput`
width:100px;
height:100px;
`;

const NewScreen = () => {
  return (
    <Container>
      <TextArea />
    </Container>
  );
};

export default NewScreen;
