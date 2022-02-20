import {
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Header } from "../navigation/Header";
import { colors } from "../components/Color";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { FONTSIZE } from "../static/FontSize";
import TimePeriodCalculator from "../components/TimePeriodCalculator";
import { MappingTimeLineArray } from "../components/MappingTimelineArray";
import { Label } from "../components/Label";
import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";
import Memoization from "../components/Memoization";
import { onScrollHandlerFunc } from "../components/ComponentLayoutandScrollHandler";

var DATA: any = [];

export const BookmarkScreen = () => {

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header 
        //{...props}
        //titleTextColor={colors.WHITE}
        titleTextColor={colors.WHITE}
        backgroundColor={colors.ARGON_PURPLE}
        title={"Watchlist"}
        titleTextFontSize={FONTSIZE?.LG}
        titleStyle={{ fontWeight: "bold" }}
      />

     <Text>Watchlist Screen</Text>
      {/* <DotedLineFunc/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.WHITE,
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  timeLineContainer: {
    // transform: [{ translateX: -40 }],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },

  square: {
    width: 2,
    height: 24,
    backgroundColor: colors.BLACK,
  },

  marker: {
    //width: Dimensions.get("window").width,
    transform: [{ translateY: -12 }, { translateX: -50 }],
    //translateY: -12,
    zIndex: 999,
    //backgroundColor: colors.ARGON_PURPLE,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center'
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  point: {
    width: 45,
    height: 2,
    backgroundColor: colors.ARGON_PURPLE,
    zIndex: 2,
  },

  pointAlert: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 5,

    alignSelf: "center",
  },

  dottedLine: {
    width: 8,
    backgroundColor: colors.BLACK,
    height: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'
  },

  dottedLinePrime: {
    width: 8,
    backgroundColor: colors.WHITE,
    height: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'
  },

});
