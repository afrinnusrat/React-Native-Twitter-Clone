import React from "react";
import styled from "styled-components";

const Container = styled.View`
  flex:1;
  background-color:coral
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
