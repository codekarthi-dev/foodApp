import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../screens";
import * as React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import SigninScreen from "../screens/SigninScreen";
import RegisterPhoneScreen from "../screens/VerificationScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { ForgotPasswordScreen } from "../screens";
import VerificationScreen from "../screens/VerificationScreen";
import { HomeScreen } from "../screens";
import { connect } from "react-redux";

const Stack = createStackNavigator();

const Navigators = ({ token }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!token ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name="Verification" component={VerificationScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.generalState.token,
  };
};

export default connect(mapStateToProps)(Navigators);
