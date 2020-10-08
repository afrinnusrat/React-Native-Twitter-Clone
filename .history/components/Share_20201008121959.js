import React from "react";
import styled from "styled-components/native";
import window from "../utils/Layout";

const height = window.window.height;

const ShareContainer = styled.View`
    width:100%;
    height: ${height * 0.2}px;
    background-color:yellow
`;

const Share = () => {
  return <ShareContainer></ShareContainer>;
};

export default Share;
