import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import { FONTSIZE } from "../static/FontSize";
import { colors } from "./Color";

type mediaCardProps = {
  //imageStyle?: StyleProp<ImageStyle> | undefined;
  style?: ViewStyle | undefined;
  imageHeight?: number | string;
  imageWidth?: number | string;
  imageSource?: {
    image?: ImageSourcePropType;
    uri?: any;
  };
  iconSource?: {
    image?: ImageSourcePropType;
    uri?: any;
  };
  iconHeight?: number | string;
  iconWidth?: number | string;
  title: string;
  headerTitle?: string;
  headerIcon?: any;

  subTitle1?: string;
  subTitle2?: string;
  subTitle3?: string;
  subTitle4?: string;
  subTitle5?: string;
  subTitle6?: string;

  subTitleIcon1?: any;
  subTitleIcon2?: any;
  subTitleIcon3?: any;
  subTitleIcon4?: any;
  subTitleIcon5?: any;
  subTitleIcon6?: any;
};

export const ItemCardMediaHorizontalScrollView = (props: mediaCardProps) => {
  return (
    <View
      style={{
        //flex:1,
        width: 200,
        //height: 104,
        flexDirection: "row",
        alignSelf: "baseline",
        justifyContent: "space-between",
        //borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: colors.WHITE,
        elevation: 5,
      }}
    >
      <View
        style={
          {
            // flexDirection: "row",
          }
        }
      >
              <View
          style={{
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          {props.headerIcon}
          <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
            {props.headerTitle}
          </Text>
        </View>
        <Image
          //resizeMode='contain'
          style={{
            width: props.imageWidth ? props.imageWidth : 78,
            height: props.imageHeight ? props.imageHeight : 104,
          }}
          source={
            (props.imageSource?.image as ImageSourcePropType) || {
              uri: props.imageSource?.uri,
            }
          }
        />
      

        <View
          style={{
            marginTop: 5,
            marginHorizontal: 8,
            marginBottom: 4,
          }}
        >
          <View
            style={
              {
                //backgroundColor: 'purple',
              }
            }
          >
            <Image
              resizeMode="contain"
              style={{
                height: props.iconHeight ? props.iconHeight : 12,
                width: props.iconWidth ? props.iconWidth : 52,
                alignItems: "flex-start",
                alignSelf: "baseline",
                alignContent: "flex-start",
              }}
              source={
                (props.iconSource?.image as ImageSourcePropType) || {
                  uri: props.iconSource?.uri,
                }
              }
            ></Image>
          </View>
          
          <View style={{ marginLeft: 2 }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon1}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle1}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon2}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle2}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon3}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle3}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon4}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle4}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon5}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle5}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              {props.subTitleIcon6}
              <Text style={{ fontSize: FONTSIZE?.[11], marginLeft: 5 }}>
                {props.subTitle6}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
