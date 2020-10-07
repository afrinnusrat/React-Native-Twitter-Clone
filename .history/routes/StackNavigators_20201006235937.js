import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/Notificationreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PosteScreen";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
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

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export const PostStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
};
