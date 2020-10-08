import React, { useState } from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
`;

const RightButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DraftText = styled.Text`
  font-weight: bold;
  color: ${Colors.light.color};
  margin-right: 15px;
`;

const TweetButton = styled.TouchableOpacity`
  padding: 5px 10px 5px 10px;
  border-radius: 20px;
  background-color: ${Colors.light.color};
`;

const TweetText = styled.Text`
  font-weight: bold;
  color: white;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: white;
`;

const TextArea = styled.View`
  padding: 10px;
  flex-direction: row;
`;

const ProfilePicture = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

const TextInput = styled.TextInput`
  margin-left: 10px;
  font-size: 18px;
`;

const Bottom = styled.View`
  position: absolute;
  bottom: 0;
  flex: 1;
`;

const Seperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin: 10px;
`;

const BottomTextSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const BottomIconSection = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const NewScreen = ({ route, navigation }) => {
  const [input, setInput] = useState("");
  const { setPosts } = route.params;

  console.log(setPosts);

  const handleSend = () => {
    const post = {
      id: 6,
      desc: input,
      photo:
        "https://images.pexels.com/photos/4972708/pexels-photo-4972708.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      date: "14 mins ago",
      likes: 434,
      comments: 312,
      retweets: 221,
      user: {
        id: 4,
        username: "demo",
        displayName: "DemoUser",
        profilePicture:
          "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    };

    setPosts((prev) => [...prev, post]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header>
        <Feather
          name="x"
          size={30}
          color={Colors.light.color}
          onPress={() => navigation.goBack()}
        />
        <RightButtons>
          <DraftText>Drafts</DraftText>
          <TweetButton onPress={handleSend}>
            <TweetText>Tweet</TweetText>
          </TweetButton>
        </RightButtons>
      </Header>
      <ContentContainer>
        <TextArea>
          <ProfilePicture
            source={{
              uri:
                "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            }}
          />
          <TextInput
            autoFocus
            placeholder="What's happening?"
            onChangeText={setInput}
          />
        </TextArea>
        <Bottom>
          <Seperator />
          <BottomTextSection>
            <MaterialCommunityIcons name="earth" size={18} color="#4d9fec" />
            <Text style={{ color: "#4d9fec", marginLeft: 5, fontSize: 12 }}>
              Everyone can reply
            </Text>
          </BottomTextSection>
          <Seperator />
          <BottomIconSection>
            <FontAwesome
              name="image"
              size={24}
              color="#4d9fec"
              style={{ marginRight: 20 }}
            />
            <MaterialIcons
              name="gif"
              size={24}
              color="#4d9fec"
              style={{ marginRight: 20 }}
            />
            <MaterialCommunityIcons
              name="chart-bar"
              size={24}
              color="#4d9fec"
              style={{ marginRight: 20 }}
            />
            <SimpleLineIcons
              name="location-pin"
              size={24}
              color="#4d9fec"
              style={{ marginRight: 20 }}
            />
            <Feather
              name="plus-circle"
              size={24}
              color="#4d9fec"
              style={{ marginLeft: 190 }}
            />
          </BottomIconSection>
        </Bottom>
      </ContentContainer>
    </SafeAreaView>
  );
};

export default NewScreen;
