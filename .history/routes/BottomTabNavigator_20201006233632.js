import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>;
}

function SearchStackNavigator() {
  <Stack.Navigator>
    <Stack.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>;
}

function NotificationStackNavigator() {
  <Stack.Navigator>
    <Stack.Screen name="Notification" component={NotificationScreen} />
  </Stack.Navigator>;
}

function MessageStackNavigator() {
  <Stack.Navigator>
    <Stack.Screen name="Message" component={MessageScreen} />
  </Stack.Navigator>;
}

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator options={}>
        <Tab.Screen name="Home" component={HomeStackNavigator} options />
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
