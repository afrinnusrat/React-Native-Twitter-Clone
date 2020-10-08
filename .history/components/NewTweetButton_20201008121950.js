import React from "react";
import styled from "styled-components/native";
import Colors from "../utils/Colors";
import { AntDesign } from "@expo/vector-icons";

const NewTweetIcon = styled.TouchableOpacity`
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

const NewTweetButton = ({ navigation }) => {
  return (
    <NewTweetIcon onPress={() => navigation.navigate("New")}>
      <AntDesign name="twitter" size={20} color="white" />
    </NewTweetIcon>
  );
};

export default NewTweetButton;
