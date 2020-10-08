import React from "react";
import { FlatList } from "react-native";
import Tweet from "./Tweet";

const Feed = ({ posts, headerComponent, navigation }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{padding:10}}
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Tweet item={item} navigation={navigation}/>}
      ListHeaderComponent={headerComponent}
    />
  );
};

export default Feed;
