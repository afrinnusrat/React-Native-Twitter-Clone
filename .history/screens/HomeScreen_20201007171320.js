import React from "react";
import Styled from "styled-components";
import Feed from "../components/Feed";
import { postArray } from "../utils/DummyData";
import window from "../utils/Layout";

console.log(window?.height);

const Container = Styled.View`
    width:100%;
    flex:1;
`;

const ShareContainer = Styled.View`
    width:100%;
    height: 
    flex:1;
    background-color:yellow
`;

const Header = () => {
  return <ShareContainer></ShareContainer>;
};

const HomeScreen = () => {
  return (
    <Container>
      <Feed posts={postArray} headerComponent={Header} />
    </Container>
  );
};

export default HomeScreen;
