import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity } from "react-native";
import Styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import Colors from "./utils/Colors";
import { AntDesign } from "@expo/vector-icons";

const NewTweetIcon = Styled.TouchableOpacity`
  height:50px;
  width:50px;
  border-radius:50px;
  background-color: ${Colors.light.color};
  align-items:center;
  justify-content:center;
  position:absolute;
  bottom:60px;
  right:10px;
  z-index:1
`;

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
      <NewTweetIcon><AntDesign name="twitter" size={20} color="white" /></NewTweetIcon>
    </>
  );
}
