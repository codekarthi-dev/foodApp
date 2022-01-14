import React from "react";
import { View } from "react-native";

const Seperator = ({ height, width }) => (
  <View style={{ height, width }}></View>
);

Seperator.defaultProps = {
  height: 0,
  width: 0,
};

export default Seperator;
