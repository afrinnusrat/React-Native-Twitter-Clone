import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import { HomeStackNavigator } from "./routes/StackNavigators";


export default function App() {
  return (
    <>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
}
