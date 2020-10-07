import React from "react";
import Styled from "styled-components";

const Container = Styled.View`
    width:100%;
    background-color:coral
`;

const Tweet = ({ item }) => {
    console.log(item)
  return <Container></Container>;
};

export default Tweet;
