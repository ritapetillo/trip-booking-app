import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

interface OptionItem {
  icon: any;
  bgColor: Array<string>;
  label: string;
  onPress: () => void;
}

const OptionItem = ({ icon, bgColor, label, onPress }: OptionItem) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <View style={{ ...styles.shadow, width: 60, height: 60 }}>
        <LinearGradient
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </View>
      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default OptionItem;
