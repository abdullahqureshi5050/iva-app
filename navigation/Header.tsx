import React from "react";
import { View, StyleSheet, Text, Alert, ColorValue, StyleProp, TextStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../components/Color";
import { FONTSIZE } from "../static/FontSize";

type headerProps = {
  headerRight?: any;
  headerLeft?: any;
  title?: string;
  height?: number | undefined;
  titleTextColor?: ColorValue | undefined;
  titleTextFontSize?: number | undefined;
  titleStyle?: TextStyle | undefined;
  backgroundColor?: ColorValue | undefined
};

export const Header = (props: headerProps) => {
  const {
    headerRight,
    headerLeft,
    title,
    height,
    titleTextColor,
    titleTextFontSize,
    backgroundColor,
    titleStyle
  } = props;
  return (
    <View
      style={{
        paddingHorizontal: 10,
        height: height ? height : 40,
        borderBottomWidth: 0.5,
        borderBottomColor: backgroundColor,
        //borderBottomColor: colors.FOREST_GREEN,
        //backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: backgroundColor
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          {headerLeft}
        </View>
        <View
          style={
            headerLeft
              ? styles.TextViewContainter
              : { ...styles.TextViewContainter, paddingHorizontal: 0 }
          }
        >
          <Text
            numberOfLines={2}
            style={{
              ...titleStyle,
              fontSize: titleTextFontSize? titleTextFontSize: FONTSIZE?.SM,
              color: titleTextColor? titleTextColor: colors.BLACK,
            }}
          >
            {title ? title : ""}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          //backgroundColor: 'pink',
          //alignSelf:'center',
        }}
      >
        {headerRight}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextViewContainter: {
    paddingHorizontal: 10,
    justifyContent: "center",
    //backgroundColor: 'purple',
    display: "flex",
    //width: "84%",
  },
});
