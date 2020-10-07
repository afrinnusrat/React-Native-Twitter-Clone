import React from "react";
import { FlatList } from "react-native";
import Tweet from "./Tweet";

const Feed = ({ posts, headerComponent }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Tweet item={item} />}
      ListHeaderComponent={headerComponent}
    />
  );
};

export default Feed;
