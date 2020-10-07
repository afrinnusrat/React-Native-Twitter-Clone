import React from "react";
import Styled from "styled-components";
import Feed from "../components/Feed";
import { postArray } from "../utils/DummyData";
import Share from "../components/Share"


const Container = Styled.View`
    flex:1;
`;

const HomeScreen = () => {
  return (
    <Container>
      <Feed posts={postArray} headerComponent={Share} />
    </Container>
  );
};

export default HomeScreen;
