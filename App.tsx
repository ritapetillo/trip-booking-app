import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Home, Onboarding, DestinationDetails } from "./screens";
import { COLORS, icons, SIZES } from "./constants";
import { useFonts } from "expo-font";
import Tabs from "./Navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();

  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Onboarding">
        {/* screens */}
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: () => (
              <TouchableOpacity style={{}} onPress={() => {}}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{ width: 25, height: 25 }}
                  />
                  <Text>Back</Text>
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{
                  marginRight: SIZES.padding,
                }}
                onPress={() => {}}
              >
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: "",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: undefined,
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DestinationDetails"
          component={DestinationDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
