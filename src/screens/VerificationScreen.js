import { StyleSheet, Text, View, StatusBar } from "react-native";
import React, { useRef, useState } from "react";
import { Display } from "../utils";
import { Colors } from "../constants";
import { Seperator } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const VerificationScreen = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });

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
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.content}>
        Enter the OTP number sent to you on your mobile number
      </Text>
      <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 1: text });

              text && secondInput.current.focus();
            }}
          ></TextInput>
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 2: text });

              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          ></TextInput>
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 3: text });

              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          ></TextInput>
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text) => {
              setOtp({ ...otp, 4: text });

              !text && thirdInput.current.focus();
            }}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={() => console.log(otp)}
      >
        <Text style={styles.signinText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    width: Display.setWidth(80),
    textAlign: "center",
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  otpBox: {
    borderRadius: 5,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
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
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
