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
        <BottomTextSection>
          <MaterialCommunityIcons name="earth" size={24} color="#4d9fec" />
          <Text style={{ color: "#4d9fec", marginLeft: 5 }}>
            Everyone can reply
          </Text>
        </BottomTextSection>
        <Seperator />
        <BottomIconSection>
          <FontAwesome name="image" size={24} color="#4d9fec" style={{marginRight:20}} />
          <MaterialIcons name="gif" size={24} color="#4d9fec" style={{marginRight:20}} />
          <MaterialCommunityIcons name="chart-bar" size={24} color="#4d9fec" style={{marginRight:20}} />
          <SimpleLineIcons name="location-pin" size={24} color="#4d9fec" style={{marginRight:20}} />
          <Feather name="plus-circle" size={24} color="#4d9fec" style={{marginRight:100}}/>
        </BottomIconSection>
      </Bottom>
    </Container>
  );
};

export default NewScreen;
