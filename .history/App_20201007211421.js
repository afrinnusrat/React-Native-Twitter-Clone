import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./routes/StackNavigators";
import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
}
