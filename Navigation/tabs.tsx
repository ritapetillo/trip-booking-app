import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DestinationDetails, Home } from "../screens";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarStyle: {
    height: 90,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 14,
    elevation: 21,
  },
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        ...tabOptions,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray;
            return (
              <Image
                source={icons.home}
                style={{ tintColor, width: 30, height: 30 }}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray;
            return (
              <Image
                source={icons.search}
                style={{ tintColor, width: 30, height: 30 }}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bookimark"
        component={DestinationDetails}
        options={{
          tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray;
            return (
              <Image
                source={icons.bookmark}
                style={{ tintColor, width: 30, height: 30 }}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={DestinationDetails}
        options={{
          tabBarIcon: ({ focused }) => {
            const tintColor = focused ? COLORS.primary : COLORS.gray;
            return (
              <Image
                source={icons.user}
                style={{ tintColor, width: 30, height: 30 }}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name="Destinations" component={DestinationDetails} /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
