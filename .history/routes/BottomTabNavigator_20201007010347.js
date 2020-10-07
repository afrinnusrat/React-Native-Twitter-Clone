import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackNavigator,
  SearchStackNavigator,
  NotificationStackNavigator,
  MessageStackNavigator,
} from "./StackNavigators";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Foundation name="home" size={28} color="black" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarIcon: () => (
            <AntDesign name="search1" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackNavigator}
        options={{
          tabBarIcon: () => <Feather name="bell" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStackNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="envelope-o" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
