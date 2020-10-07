import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PostScreen";
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle:"asd"}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export const MessageStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
};
