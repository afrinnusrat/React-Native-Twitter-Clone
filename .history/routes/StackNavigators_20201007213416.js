import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PostScreen";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import Colors from "../utils/Colors";
import NewScreen from "../screens/NewScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";

const RightButtons = styled.View`
  flex-direction: row;
  align-items:center
`;

const DraftText = styled.Text`
  font-weight: bold;
  color: ${Colors.light.color};
  margin-right:15px
`;

const TweetText = styled.Text`
  font-weight: bold;
  color: white;
  padding: 10px;
  border-radius: 10px;
  background-color: ${Colors.light.color};
`;

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerTitle: () => (
            <AntDesign name="twitter" size={30} color={Colors.light.color} />
          ),
          headerLeft: () => (
            <Image
              style={{ width: 32, height: 32, borderRadius: 50 }}
              source={{
                uri:
                  "https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
              }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={30}
              color={Colors.light.color}
            />
          ),
          headerTitleAlign: "center",
          headerLeftContainerStyle: { marginLeft: 15 },
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen
        name="New"
        component={NewScreen}
        options={{
          headerTitle: false,
          headerLeft: (navigation) => (
            <Feather name="x" size={30} color={Colors.light.color} onPress={()=>navigation.goBack()} />
          ),
          headerRight: () => (
            <RightButtons>
              <DraftText>Drafts</DraftText>
              <TweetText>Tweet</TweetText>
            </RightButtons>
          ),
          headerTitleAlign: "center",
          headerLeftContainerStyle: { marginLeft: 15 },
          headerRightContainerStyle: { marginRight: 15 },
        }}
      />
    </Stack.Navigator>
  );
};

/* export const SearchStackNavigator = () => {
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
}; */
