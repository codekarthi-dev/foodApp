import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Display } from "../utils";
import { Fonts, Colors, Images } from "../constants";
const WelcomeCard = ({ title, content, image }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={Images[image]}
        resizeMode="contain"
      ></Image>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: Display.setWidth(100),
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  contentText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
