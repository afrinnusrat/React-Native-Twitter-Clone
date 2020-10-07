import React from "react";
import Styled from "styled-components";
import Colors from "../utils/Colors";
import { AntDesign } from "@expo/vector-icons";

const NewTweetIcon = Styled.TouchableOpacity`
  height:60px;
  width:60px;
  border-radius:50px;
  background-color: ${Colors.light.color};
  align-items:center;
  justify-content:center;
  position:absolute;
  bottom:20px;
  right:10px;
  z-index:1
`;

const NewTweetButton = () => {
  return (
    <NewTweetIcon>
      <AntDesign name="twitter" size={20} color="white" />
    </NewTweetIcon>
  );
};

export default NewTweetButton;
