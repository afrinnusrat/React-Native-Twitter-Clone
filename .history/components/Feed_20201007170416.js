import React from "react";
import { FlatList } from "react-native";
import { postArray } from "../utils/DummyData";

const Feed = ({ headerComponent }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={postArray}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Tweet item={item} />}
      ListHeaderComponent={headerComponent}
    />
  );
};

export default Feed;
