import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const PostScreen = ({ route }) => {
  const { item } = route.params;

  console.log(item);
  return <Container></Container>;
};

export default PostScreen;
