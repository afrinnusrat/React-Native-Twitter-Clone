import React from "react";
import { FlatList } from "react-native";
import Tweet from "./Tweet";

const Feed = ({ posts, headerComponent, navigation }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Tweet item={item} style={{padding:10}} navigation={navigation}/>}
      ListHeaderComponent={headerComponent}
    />
  );
};

export default Feed;
