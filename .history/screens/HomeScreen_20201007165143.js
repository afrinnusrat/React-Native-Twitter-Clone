import React from "react";
import Styled from "styled-components";

import Feed from "../components/Feed";

const Container = Styled.View`
    width:100%;
    flex:1;
    background-color:coral
`;

const HomeScreen = () => {
  return (
    <Container>
      <Feed />
    </Container>
  );
};

export default HomeScreen;
