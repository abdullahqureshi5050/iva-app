import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useRef } from "react";
import { Label } from "../components/Label";
import { colors } from "../components/Color";
import { Header } from "../navigation/Header";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { ButtonC } from "../components/Button";
import { TextInputC } from "../components/TextInput";
import { FONTSIZE } from "../static/FontSize";

export const CalculationsScreen = () => {
  const refRBSheet: any = useRef();
  return (
    <View style={styles.rootContainer}>
      <ScrollView style={{ flex: 1 }}>
        <Header
          //{...props}
          
          titleTextColor={colors.BLACK}
          backgroundColor={colors.GRAY}
          title={"Nightline"}
          headerLeft={
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
          headerRight={
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
        />
        <Header
          //{...props}
          titleTextColor={colors.BLACK}
          backgroundColor={colors.GRAY}
          title={"Daily Consumption"}
          headerLeft={
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
          headerRight={
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
        />
        <Header
          //{...props}
          titleTextColor={colors.BLACK}
          backgroundColor={colors.GRAY}
          title={"DMA Demand"}
          headerLeft={
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
          headerRight={
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
        />
        <Header
          //{...props}
          titleTextColor={colors.BLACK}
          backgroundColor={colors.GRAY}
          title={"DMA Nightline"}
          headerLeft={
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
          headerRight={
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.ARGON_PURPLE}
            />
          }
        />
      </ScrollView>

      {/* chat part */}
      {/* <View style={styles.mainViewContainer}>
        <ScrollView
          //keyboardShouldPersistTaps='always'
          //keyboardShouldPersistTaps={'handled'} keyboardDismissMode="on-drag"
          //keyboardDismissMode='interactive'
          style={{ marginVertical: 5 }}
        >
          <View style={{ paddingTop: 5, justifyContent: "flex-end" }}>
            <View style={{ alignSelf: "flex-start" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  alignItems: "flex-start",
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}
                label={"Hello"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  alignItems: "flex-start",
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}
                label={`Hi, You can teach me new domain concept of exceptation criteria.${"\n"}${"\n"}What would you like to teach me today?`}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
            <Label
                 labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  alignItems: "flex-start",
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}
                label={"Nothing"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
          </View>
        </ScrollView>
      </View> */}
      {/* <View style={{ flexDirection: "row", justifyContent: 'flex-start', marginHorizontal: 10, }}>
      <Label
            labelContainerStyle={{
              padding: 5,
              marginRight: 5,
              borderColor: colors.WHITE,
              borderWidth: 1,
              backgroundColor: colors.GRAY,
            }}
            label={"Calculations"}
            color={colors.BLACK}
            backgroundColor={colors.DARK_GRAY}
          />
          <Label
            labelContainerStyle={{
              padding: 5,
              marginRight: 5,
              borderColor: colors.WHITE,
              borderWidth: 1,
              backgroundColor: colors.GRAY,
            }}
            label={"Expectations"}
            color={colors.BLACK}
            backgroundColor={colors.DARK_GRAY}
          />
    
        </View> */}
 
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  mainViewContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F4F5F7'
  },
});
