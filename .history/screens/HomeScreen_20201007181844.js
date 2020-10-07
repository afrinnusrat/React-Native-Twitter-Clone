import React from "react";
import Styled from "styled-components";
import Feed from "../components/Feed";
import { postArray } from "../utils/DummyData";

const Container = Styled.View`
    flex:1;
    margin:10px
    background-color:white
`;

const HomeScreen = () => {
  return (
    <Container>
      <Feed posts={postArray}/>
    </Container>
  );
};

export default HomeScreen;
