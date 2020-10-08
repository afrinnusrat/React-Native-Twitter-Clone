import React, { useState } from "react";
import Styled from "styled-components/native";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { postArray } from "../utils/DummyData";

const Container = Styled.View`
    flex:1;
    padding:10px
    background-color:white
`;

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(postArray);
  return (
    <Container>
      <NewTweetButton setPosts={setPosts} navigation={navigation} />
      <Feed posts={posts} />
    </Container>
  );
};

export default HomeScreen;
