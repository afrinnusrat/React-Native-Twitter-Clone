import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PostScreen = ({ route }) => {
  const { user } = route.getParams;

  console.log(user);
  return (
    <View>
      <Text>PostScreen</Text>
    </View>
  );
};

export default PostScreen;
