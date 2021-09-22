import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONTS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

interface Props {
  item: any;
  index: number;
}
const DestinationCard = ({ item, index }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => navigation.navigate("DestinationDetails")}
      style={[
        { justifyContent: "center", marginHorizontal: SIZES.base },
        index === 0 && { marginLeft: SIZES.padding },
      ]}
    >
      <Image
        source={item.img}
        resizeMode="cover"
        style={{
          width: SIZES.width * 0.28,
          height: "82%",
          borderRadius: 15,
        }}
      />
      <Text
        style={{ marginTop: SIZES.base / 2, ...FONTS.h4, textAlign: "center" }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default DestinationCard;

const styles = StyleSheet.create({});
