import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Onboarding = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ flex: 1.3, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={images.onboardingImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: "center",
              ...FONTS.body3,
            }}
          >
            Easy solution to buy tickets for your travels, busines trips,
            transporation, loaging, culinary.
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.shadow,
            {
              marginTop: SIZES.padding * 2,
              width: "70%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          onPress={() => {
            navigation.navigate("Tabs");
          }}
        >
          <LinearGradient
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
            }}
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={{ ...FONTS.h3, color: "#fff" }}>Start!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
