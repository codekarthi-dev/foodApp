import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { Colors, General } from "../constants";
import { WelcomeCard } from "../components";
import { Display } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const pageStyle = (isActive) =>
  isActive
    ? styles.page
    : { ...styles.page, backgroundColor: Colors.DEFAULT_GREY };

const Pagination = ({ index }) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        )
      )}
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const [welcomeListIndex, setwelcomeListIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({ changed }) => {
    setwelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          pagingEnabled
          data={General.WELCOME_CONTENTS}
          keyExtractor={(item) => item.title}
          horizontal
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <WelcomeCard {...item} />}
        />
      </View>
      <Pagination index={welcomeListIndex}></Pagination>
      {welcomeListIndex === 2 ? (
        <TouchableOpacity
          style={styles.gettingStartedButton}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ marginLeft: 10 }}
            onPress={() => welcomeList.current.scrollToEnd()}
          >
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeListContainer: {
    height: Display.setHeight(60),
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Display.setWidth(90),
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16 * 1.4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  pageContainer: { flexDirection: "row" },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginTop: 30,
  },
  gettingStartedButtonText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,
  },
});
