import { Feather, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Seperator } from "../components";
import { Colors, Images } from "../constants";
import { Display } from "../utils";

const SignUpScreen = ({ navigation }) => {
  const [isPasswordShow, setPasswordShow] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      ></StatusBar>
      <Seperator height={StatusBar.currentHeight}></Seperator>
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={20}
          color="black"
        ></Ionicons>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.content}>
        Enter your Email, Choose a username and password
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Seperator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
          />
        </View>
      </View>
      <Seperator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            secureTextEntry={isPasswordShow ? false : true}
          />
          <Feather
            name="eye"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
            onPress={() => setPasswordShow(!isPasswordShow)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => navigation.navigate("RegisterPhone")}
      >
        <Text style={styles.signinText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonLogoContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          </View>
          <Text style={{ color: Colors.DEFAULT_WHITE }}>
            Connect with Facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonLogoContainer}>
          <View style={styles.signinButtonLogoContainer}>
            <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          </View>
          <Text style={{ color: Colors.DEFAULT_WHITE }}>
            Connect with Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signinButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: 20,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signinText: { color: Colors.DEFAULT_WHITE, fontWeight: "bold" },
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    width: Display.setWidth(85),
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 10,
  },
  content: {
    fontSize: 20,
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: "center",
  },
  inputSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: "center",
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },
  orText: {
    alignSelf: "center",
    fontWeight: "300",
    marginTop: 20,
    marginBottom: 20,
  },
  facebookButton: {
    backgroundColor: Colors.FABEBOOK_BLUE,
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 8,
  },
  googleButton: {
    backgroundColor: Colors.GOOGLE_BLUE,
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 8,
  },
  signinButtonLogo: { height: 18, width: 18 },
  signinButtonLogoContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    padding: 2,
    borderRadius: 3,
    left: 25,
    position: "absolute",
  },
  socialButtonLogoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
