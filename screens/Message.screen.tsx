
// front end chat screen alternative for figma design

import React, { useEffect, useRef, useState, createContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  Button,
  Dimensions,
} from "react-native";

import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

import { FONTSIZE } from "../static/FontSize";

import { colors } from "../components/Color";

import { Header } from "../navigation/Header";
import { TextInputC } from "../components/TextInput";
import { ButtonC } from "../components/Button";
import { Label } from "../components/Label";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  fastSpeedMode,
  autoSlow,
  autoSlowTime,
  setAutoSlow,
  setFastSpeedMode,
  setAutoSlowTime,
  playmode,
  headerTime,
  TimelineScreen
} from "./Timeline.screen";
import moment from "moment";

//const ThemeContext = createContext('');
export let isTouchedContext = createContext(false);

export const MessageScreen = (props: any) => {
  //const [itemSearchFocusedState, setItemSearchFocusedState] = useState(false);

  const screenIntractionHandler = () => {
    if (playmode) {
      console.log("detectTouch");
      if(fastSpeedMode){
        //console.log("autoSlow", autoSlow);
        setAutoSlow(true);
        console.log('auto slow enabled for 30 sec');
        //console.log("autoSlow", autoSlow);
        var currentTime:any = moment();
      setAutoSlowTime(currentTime) //time.now
        setFastSpeedMode(false);
        console.log('fastspeedMode in Chat',fastSpeedMode);
      }
      else{
       
        if(autoSlow){
          console.log('autSlow reset');
          var currentTime:any = moment();
          setAutoSlowTime(currentTime); 
        }
      }
    }else
    console.log('not playing')
  };

  const refRBSheet: any = useRef();
  return (
    <View
      style={styles.rootContainer}
      //onPress={Keyboard.dismiss}
      accessible={false}
      onTouchEnd={screenIntractionHandler}
    >
      <Header
        //{...props}
        titleTextColor={colors.WHITE}
        backgroundColor={colors.ARGON_PURPLE}
        title={"Chat"}
        titleTextFontSize={FONTSIZE?.LG}
        titleStyle={{ fontWeight: "bold" }}
        headerRight={
          <View>
            <Text style={{ color: colors.WHITE }}>1:30 PM - 5 Nov 22</Text>
          </View>
        }
      />
      <View style={styles.mainViewContainer}>
        <ScrollView
        //keyboardShouldPersistTaps='always'
        //keyboardShouldPersistTaps={'handled'} keyboardDismissMode="on-drag"
        //keyboardDismissMode='interactive'
        //style={{flex:1}}
        >
          <View
            style={{
              flex: 1,
              paddingTop: 5,
              marginBottom: 5,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ alignSelf: "flex-start" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
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
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}
                label={"Hello! Good morning, How can I help you today?"}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
            <View style={{ alignSelf: "flex-start" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}
                label={"What's the pressure in street ABC?"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  marginBottom: 5,
                  marginHorizontal: 5,
                  marginVertical: 10,
                }}
                label={"70 PSI"}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
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
                label={"Any new incidents?"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  marginBottom: 5,
                  marginHorizontal: 5,
                }}
                label={"No"}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
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
                label={"Okay thanks"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
            </View>
            {/* <View style={{ alignSelf: "flex-end" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  marginBottom: 5,
                  marginHorizontal: 5,
                }}
                label={"Not "}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
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
                label={"Now"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  marginBottom: 5,
                  marginHorizontal: 5,
                }}
                label={"Done! ;)"}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
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
                  elevation: 5,
                  maxWidth: Dimensions.get("window").width * 0.8,
                  marginBottom: 5,
                  marginHorizontal: 5,
                }}
                label={"hi"}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View>
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
                label={"Good job"}
                color={colors.BLACK}
                backgroundColor={colors.BUBBLE}
              />
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              <Label
                labelContainerStyle={{
                  maxWidth: Dimensions.get("window").width * 0.8,
                  elevation: 5,
                  marginBottom: 5,
                  marginHorizontal: 5,
                }}
                label={":)"}
                color={colors.BLACK}
                backgroundColor={colors.WHITE}
              />
            </View> */}
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Label
            labelContainerStyle={{
              padding: 5,
              marginRight: 5,
              borderColor: colors.WHITE,
              borderWidth: 1,
              backgroundColor: colors.GRAY,
            }}
            label={"Work in Progress!"}
            color={colors.BLACK}
            backgroundColor={colors.DARK_GRAY}
          />
          <Label
            //fontSize={FONTSIZE.}
            labelContainerStyle={{
              padding: 5,
              marginRight: 5,
              borderColor: colors.WHITE,
              borderWidth: 1,
              backgroundColor: colors.GRAY,
            }}
            label={"Notify if"}
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
            label={"Report Daily"}
            color={colors.BLACK}
            backgroundColor={colors.DARK_GRAY}
          />
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss;
          }}
          accessible={false}
        >
          <View style={styles.searchContainer}>
            <View
              style={
                { width: "100%", flex: 1 }
                //styles.searchTextInput
              }
              // onPress={Keyboard.dismiss}
              // accessible={false}
            >
              {/* Search on page */}
              <TextInputC
                //onFocus={() => setItemSearchFocusedState(true)}
                //onBlur={() => setItemSearchFocusedState(false)}
                textInputContainerStyle={{
                  borderRadius: 5,
                  borderColor: colors.DIM_GRAY,
                  backgroundColor: colors.DIM_GRAY,
                  height: 40,
                  marginRight: 0,
                  flex: 1,
                }}
                textInputStyle={{
                  flex: 1,
                  marginVertical: 0,
                  marginRight: 0,
                  fontSize: FONTSIZE?.SM,
                  color: colors.ARGON_PURPLE,
                }}
                placeholder="Type here ..."
                icon={
                  <FontAwesome
                    name="send"
                    size={24}
                    color={colors.ARGON_PURPLE}
                  />
                }
              ></TextInputC>
            </View>

            {/* Filter Icon  */}

            {/* <ShadowC> */}
            <ButtonC
              //onPress={refRBSheet.current?.open()}
              onPress={() => refRBSheet.current?.open()}
              textContainerStyle={{
                marginLeft: 10,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                borderColor: colors.WHITE,
                shadowColor: colors.WHITE,
                //borderWidth: 1,
                //borderRadius: 1,
                //elevation: 5,
              }}
              title={
                <MaterialCommunityIcons
                  name="microphone"
                  size={30}
                  color={colors.ARGON_PURPLE}
                />
              }
              //textContainerStyle={{ backgroundColor: "red" }}
              //titleShown={false}
              textStyle={{
                margin: 0,
                // padding: 0,
                // justifyContent: 'center' , alignContent: 'center',
                // textAlign: 'center', alignItems: 'center',
                backgroundColor: colors.WHITE,
                // alignSelf: "flex-end",
                //padding: 10,
              }}
            ></ButtonC>
            {/* microphone btn useRef RBSheet */}
            {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent",
                },
                draggableIcon: {
                  backgroundColor: "#000",
                },
              }}
            >
              {/* <YourOwnComponent /> */}
              <View
                style={{
                  justifyContent: "center",
                  flex: 1,
                  alignItems: "center",
                }}
              >
                <Text>Speech to Text...</Text>
              </View>
            </RBSheet>

            {/* </ShadowC> */}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  mainViewContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
  //   footer: {
  //     flex: 1,
  //     position: 'absolute',
  //     //height: 40,
  //     left: 0,
  //     top: Dimensions.get('window').height -180,
  //     width: Dimensions.get('window').width,
  // },
  searchContainer: {
    marginVertical: 10,
    //flex: 1,
    //backgroundColor: "red",
    //width: Dimensions.get('window').width,

    flexDirection: "row",
  },
});
