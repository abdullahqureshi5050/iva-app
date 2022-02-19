import { ColorValue, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
  
type labelProps ={
  label: string
  labelContainerStyle?: ViewStyle
  backgroundColor?: ColorValue | undefined
  textStyle?: TextStyle
  color?: ColorValue | undefined
  fontSize?: number | undefined
  numberOfLines?: number | undefined
}

export const Label = (props: labelProps) => {
    const { label, backgroundColor, color, fontSize, labelContainerStyle, numberOfLines, textStyle} = props;
  return (
    <View
      style={{...styles.viewContainer, backgroundColor: backgroundColor, ...labelContainerStyle}}
    >
      <Text numberOfLines={numberOfLines} style={{ color: color, fontSize: fontSize, ...textStyle }}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    viewContainer: {
        padding: 8,
        alignSelf: "baseline",
        borderRadius: 5,
      }
});
