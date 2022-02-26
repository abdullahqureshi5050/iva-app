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
import { Header } from "../navigation/Header";

import { FONTSIZE } from "../static/FontSize";
import { ItemCardMediaHorizontalScrollView } from "../components/ItemCardMediaHorizontalScrollView";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { colors } from '../components/Color';
// import mapsImage from "../assets/images/maps.png";
var DATA: any = [];

export const WatchListScreen = () => {

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

<View style={{ marginTop: 10, marginLeft: 10, marginBottom: 25 }}>
              <ItemCardMediaHorizontalScrollView
               // imageSource={{ image: img.igdb.guardiansOfTheGalaxyMarvel }}
                title=""//"guardians of the Galaxy"
                
                headerTitle="Potential Pipe Burst"

                headerIcon={
                  <MaterialCommunityIcons
                  name="asterisk"
                  size={16}
                  color={colors.BLACK}
                />
                }

                imageSource={{image: require("../assets/images/maps.png")}}
                imageHeight={100}
                imageWidth={300}
                subTitle1="1:05 PM - 5 Nov 21"
                subTitle2="Nicoll Highway 2 Street ABC"
                subTitle3="On Going"
                subTitle4="DMA 3"
                subTitle5="Pressure: Abnormal"
                subTitle6="No Water Complaints: 5"
                
                subTitleIcon1={
                  <MaterialCommunityIcons
                    name="clock-time-three-outline"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                subTitleIcon2={
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                subTitleIcon3={
                  <MaterialCommunityIcons
                    name="format-list-checks"
                    size={16}
                    color={colors.BLACK}
                  />
                 // <MaterialCommunityIcons name="format-list-checks" size={24} color="black" />
                }
                subTitleIcon4={
                  <MaterialCommunityIcons
                    name="checkbox-intermediate"
                    size={16}
                    color={colors.BLACK}
                  />
                }
                subTitleIcon5={
                  // <Entypo name="circle" size={24} color="black" />
                  // <FontAwesome name="circle" size={24} color="black" />
                  <FontAwesome name="circle"
                    //name="map-marker-outline"
                    size={16}
                    color={'red'}
                  />
                }
                subTitleIcon6={
                  <FontAwesome name="circle"
                  //name="map-marker-outline"
                  size={16}
                  color={'red'}
                />
                }
                //imageHeight={104}
                //imageWidth={78}
                //iconSource={{ image: img.icon.ps4 }}
                //iconHeight={12}
                //iconWidth={52}
              />
            </View>
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
