import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackNavigator,
  SearchStackNavigator,
  NotificationStackNavigator,
  MessageStackNavigator,
} from "./StackNavigators";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator labeled={false}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackNavigator}
        options={{
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStackNavigator}
        options={{
          tabBarIcon: () => <Foundation name="home" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
