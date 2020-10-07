import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import {
  ProfileStackNavigator,
  PostStackNavigator,
} from "./routes/StackNavigators";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      {/* </NavigationContainer>
      <NavigationContainer>
        <ProfileStackNavigator />
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
