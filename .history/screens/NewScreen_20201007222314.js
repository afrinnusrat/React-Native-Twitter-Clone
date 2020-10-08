import React from "react";
import styled from "styled-components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

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
`;

const Seperator = styled.View`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  margin: 10px;
`;

const BottomSection = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const NewScreen = () => {
  return (
    <Container>
      <TextArea>
        <ProfilePicture
          source={{
            uri:
              "https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
        <TextInput autoFocus placeholder="What's happening?" />
      </TextArea>
      <Bottom>
        <Seperator />
        <BottomSection>
          <MaterialCommunityIcons name="earth" size={24} color="#4d9fec" />
          <Text style={{ color: "#4d9fec", marginLeft: 5 }}>
            Everyone can reply
          </Text>
        </BottomSection>
        <Seperator />
        <BottomSection>
          <FontAwesome name="image" size={24} color="black" />
          <MaterialIcons name="gif" size={24} color="black" />
          <MaterialCommunityIcons name="chart-bar" size={24} color="black" />
          <SimpleLineIcons name="location-pin" size={24} color="black" />
          <Feather name="plus-circle" size={24} color="black" />
        </BottomSection>
      </Bottom>
    </Container>
  );
};

export default NewScreen;
