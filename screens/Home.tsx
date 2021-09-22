import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import DestinationCard from "../components/DestinationCard";
import OptionItem from "../components/OptionItem";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const destinations = [
  {
    id: 0,
    name: "Ski Villa",
    img: images.skiVilla,
  },
  {
    id: 1,
    name: "Climbing Hills",
    img: images.climbingHills,
  },
  {
    id: 2,
    name: "Frozen Hills",
    img: images.frozenHills,
  },
  {
    id: 3,
    name: "Beach",
    img: images.beach,
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.base,
          overflow: "hidden",
        }}
      >
        <Image
          resizeMode="cover"
          source={images.homeBanner}
          borderRadius={15}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", marginTop: 20 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.radius,
          }}
        >
          <OptionItem
            icon={icons.airplane}
            bgColor={["#46aeff", "#5884ff"]}
            label="Flight"
            onPress={() => {}}
          />
          <OptionItem
            icon={icons.train}
            bgColor={["#fddf90", "#fcda13"]}
            label="Train"
            onPress={() => {}}
          />
          <OptionItem
            icon={icons.bus}
            bgColor={["#e973ad", "#da5df2"]}
            label="Bus"
            onPress={() => {}}
          />
          <OptionItem
            icon={icons.taxi}
            bgColor={["#fcaba8", "#fe6bba"]}
            label="Taxi"
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            marginTop: SIZES.base,
          }}
        >
          <OptionItem
            icon={icons.bed}
            bgColor={["#ffc465", "#ff9c5f"]}
            label="Hotel"
            onPress={() => {}}
          />
          <OptionItem
            icon={icons.eat}
            bgColor={["#7cf1fb", "#4ebefd"]}
            label="Eats"
            onPress={() => {}}
          />
          <OptionItem
            icon={icons.compass}
            bgColor={["#7be993", "#46caaf"]}
            label="Adventure"
            onPress={() => {}}
          />
          <OptionItem
            icon={icons.event}
            bgColor={["#fca397", "#fc7b6c"]}
            label="Events"
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.body3,
          }}
        >
          Destinations
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={destinations}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <DestinationCard item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
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
