import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackNavigator,
  SearchStackNavigator,
  NotificationStackNavigator,
  MessageStackNavigator,
} from "./StackNavigators";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeStackNavigator}  />
        <Tab.Screen name="Search" component={SearchStackNavigator} />
        <Tab.Screen
          name="Notification"
          component={NotificationStackNavigator}
        />
        <Tab.Screen name="Message" component={MessageStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
