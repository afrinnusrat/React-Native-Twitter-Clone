import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import { postArray } from "../utils/DummyData";

const Container = styled.View`
    flex:1;
    padding:10px
    background-color:white
`;

const HomeScreen = ({ navigation }) => {
  const store = useSelector((store) => store);
  console.log(store.posts);
  return (
    <Container>
      <NewTweetButton navigation={navigation} />
      <Feed posts={store.posts.sort((a, b) => b.date - a.date)} navigation={navigation}/>
    </Container>
  );
};

export default HomeScreen;
