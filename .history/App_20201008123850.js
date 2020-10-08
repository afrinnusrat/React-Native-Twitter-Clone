import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStackNavigator } from "./routes/StackNavigators";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  console.log(store)
  return (
    <>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
}
