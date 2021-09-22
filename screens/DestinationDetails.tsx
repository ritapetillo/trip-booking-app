import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";

const rateToStars = (rate: number) => {
  //check numner of full stars and generate an array with full stars
  const arr = new Array(Math.floor(rate)).fill("full");
  //check if the array should contain half star
  if (rate % 1 !== 0) {
    arr.push("half");
  }
  return arr;
};
interface IconLabel {
  icon: any;
  label: string;
}

const IconLabel = ({ icon, label }: IconLabel) => (
  <View
    style={{
      justifyContent: "space-between",
      maxHeight: 90,
      alignItems: "center",
    }}
  >
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        tintColor: COLORS.primary,
        marginBottom: SIZES.base,
        height: 50,
      }}
    />
    <Text>{label}</Text>
  </View>
);

const DestinationDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={{ flex: 2, position: "relative" }}>
        <View
          style={{
            position: "absolute",
            top: 50,
            left: 20,
            right: 20,
            //height: 50,
            flexDirection: "row",
            zIndex: 99,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.navigate("Home");
              }}
            >
              <Image
                source={icons.back}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={() => {
                console.log("Menu on pressed");
              }}
            >
              <Image
                source={icons.menu}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={images.skiVillaBanner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "80%",
          }}
        />
        <View
          // @ts-ignore
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            transform: [{ translateY: "-100%" }],
            borderRadius: 15,
            padding: SIZES.padding,
            backgroundColor: COLORS.white,
            width: "90%",
            minHeight: 100,
            zIndex: 99,
            borderColor: COLORS.black,
            ...styles.shadow,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={images.skiVilla}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 15,
                }}
              />
            </View>
            <View
              style={{
                marginHorizontal: 25,
                justifyContent: "space-evenly",
              }}
            >
              <Text style={{ fontWeight: "800" }}>Ski Villa</Text>
              <Text style={{ color: COLORS.gray }}>France</Text>
              <View style={{ flexDirection: "row" }}>
                {rateToStars(4.5).map((star) => (
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    source={star === "full" ? icons.starFull : icons.starHalf}
                  />
                ))}
              </View>
            </View>
          </View>
          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Ski Villa offers simple rooms with mountain views in front of the
              ski lift to the Ski Resort
            </Text>
          </View>
        </View>
      </View>
      {/* body */}
      <View style={{ flex: 1.5 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "space-between",
            paddingHorizontal: SIZES.padding,
          }}
        >
          <IconLabel icon={icons.villa} label="Villa" />
          <IconLabel icon={icons.parking} label="Parking" />
          <IconLabel icon={icons.wind} label="4 C" />
        </View>
        <View
          style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}
        >
          <Text style={{ ...FONTS.h2 }}>About</Text>
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            Located at the Alps with an altitude of 1,702 meters. The ski area
            is the largest ski area in the world and is known as the best place
            to ski. Many other facilities, such as fitness center, sauna, steam
            room to star-rated restaurants.
          </Text>
        </View>
      </View>
      {/* footer */}
      <View style={{ flex: 0.5 }}>
        <LinearGradient
          style={[{ height: 70, width: "100%", borderRadius: 15 }]}
          colors={["#edf0fc", "#d6dfff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                marginHorizontal: SIZES.padding,
                justifyContent: "center",
              }}
            >
              <Text style={{ ...FONTS.h1 }}>$1000</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 130,
                height: "80%",
                marginHorizontal: SIZES.radius,
              }}
              onPress={() => {
                console.log("Booking on pressed");
              }}
            >
              <LinearGradient
                style={[
                  {
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                  },
                ]}
                colors={["#46aeff", "#5884ff"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                  BOOKING
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default DestinationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
