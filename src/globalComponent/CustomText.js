import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomText = props => {
  const defaultStyle = { fontFamily: "Tahoma" };
  const incomingStyle = Array.isArray(props.style)
    ? props.style
    : [props.style];
  return (
    <Text {...props} style={[defaultStyle, ...incomingStyle]}>
      {props.children}
    </Text>
  );
};

export default CustomText;
