import React, { useState } from "react";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const Header = styled.View`
  width: 100%;
  height: 20px;
  background-color: coral;
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

const TweetText = styled.Text`
  font-weight: bold;
  color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 20px;
  background-color: ${Colors.light.color};
`;

const Container = styled.View`
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

const NewScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  );
};

export default NewScreen;
