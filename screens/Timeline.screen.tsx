//import { HorizontalTimeline } from 'react-native-horizontal-timeline';
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../components/Color";
import { TimePeriodCalculator } from "../components/TimePeriodCalculator";
import { Header } from "../navigation/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { Label } from "../components/Label";
import moment from "moment";
import { onScrollHandlerFunc } from "../components/ComponentLayoutandScrollHandler";
import { FONTSIZE } from "../static/FontSize";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { DotedLineFunc } from "../components/DotedLineFunc";
import { ActivityIndicatorSpinner } from "../components/ActivityIndicator";
import axios from "axios";
import { startapi } from "../api/startapi";

//global scope - outside scope

var scrollIndex = 0;
var playTime: any;
var playmode = false;
var currentTime;
var fastSpeedMode: boolean = true;
var clockSyncInterval: any;

export const TimelineScreen = () => {
  const [startTimeState, setStartTimeState] = useState("2021-07-05 00:00");
  const [endTimeState, setEndTimeState] = useState("2021-09-29 00:00");
  const [headerTimeState, setHeaderTimeState] = useState("0");
  const [formatedDateCardState, setFormatedDateCardState] = useState("");
  const [date1State, setDate2State] = useState("0");
  const [playButtonState, setPlayButtonState] = useState("play-circle");
  const [fastClockState, setfastClockState] = useState("rabbit");
  const [offsetState, setOffsetState] = useState(0);
  const speed = 0;
  //const [points, setPoints] = useState(0);

  // Your app
  // </Context.Provider>
  const scrollViewRef = useRef();

  let labelShown = false;
  let headerTime = "0";
  let date1: any = "";
  const playButtonUseRef = useRef(null);

  clockSyncInterval = setInterval(() => {
    if (playmode) {
      if (fastSpeedMode) {
        var currentTime = moment();
        var diff = currentTime.diff(playTime, "seconds");

        if (diff >= 5) {
          let currnetPlayIndex = moment(startTimeState)
            .add(scrollIndex, "days")
            .format("DD MMM YYYY hh:mm:ss");

          var dateAtIndex = currnetPlayIndex + " GMT";

          //axios call
          console.log("FAST STEP");
          axios
            .post(
              "https://iva-api-management.azure-api.net/iva/v1/datareplay",
              {
                replay_request: {
                  userID: "1234567890",
                  command: "START",
                  val: dateAtIndex, //"19 Jan 2022 16:05:50 GMT" //fD //
                },
              },
              {
                headers: {
                  "Ocp-Apim-Subscription-Key":
                    "8e522f5dd33b4892b2a8e149d504b153",
                  "Ocp-Apim-Trace": true,
                  "Content-Type": "application/json",
                },
              }
            )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          playTime = moment();
        }
      } else {
        var currentTime = moment();
        var diff = currentTime.diff(playTime, "seconds");
        if (diff >= 60) {
          console.log("SLoW STEP");

          let currnetPlayIndex = moment(startTimeState)
            .add(scrollIndex, "days")
            .format("DD MMM YYYY hh:mm:ss");

          var dateAtIndex = currnetPlayIndex + " GMT";

          axios
            .post(
              "https://iva-api-management.azure-api.net/iva/v1/datareplay",
              {
                replay_request: {
                  userID: "1234567890",
                  command: "START",
                  val: dateAtIndex, //"19 Jan 2022 16:05:50 GMT" //fD //
                },
              },
              {
                headers: {
                  "Ocp-Apim-Subscription-Key":
                    "8e522f5dd33b4892b2a8e149d504b153",
                  "Ocp-Apim-Trace": true,
                  "Content-Type": "application/json",
                },
              }
            )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          playTime = moment();
        }
      }
    }
  }, 1000);

  useEffect(() => {
    //first
    headerTime = "2021-07-05 00:00";
    if (fastClockState === "rabbit") {
      //speed = "60x"
      console.log("fast mode enabled");
    } else {
      console.log("slow mode");
    }

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': '8e522f5dd33b4892b2a8e149d504b153',
    //     'Ocp-Apim-Trace': true,
    //     'Content-Type': 'application/json'
    //   },
    //   data: qs.stringify({​​​​​​​​​​​​​​
    //     "replay_request": {​​​​​​​​​​​​​​​​​​​​​​​​​
    //         "userID": "1234567890",
    //         "command": "START",
    //         "val": "21 Jul 2021 16:00:00 UTC"
    //     }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
    // }​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​),
    // url: 'https://iva-api-management.azure-api.net/iva/v1/datareplay'
    // };

    //formatedDateCard = moment(startTimeState).format("d MMM YY");
    //date1 = moment(startTimeState).add(60 , "days").toDate();
    //moment(startTimeState).format("d MMM YY");
    //setFormatedDateCardState(formatedDateCard)
    //setStartTimeState("2021-07-05 00:00")
    //setEndTimeState("2022-07-29 00:00")

    return () => {
      // second
    };
  }, [startTimeState, fastClockState]);

  let formatedDate: React.SetStateAction<string>;
  let formatedDateCard: React.SetStateAction<string>;

  const slowlyScrollDown = () => {
    //offset + 80
    const y = scrollIndex + 26;
    scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
    setOffsetState(y);
  };
  // useEffect(() => {
  //   forceUpdate(formatedDate)
  //   //useCallback((props) =>  setHeaderTimeState(props), []);

  //   return () => {

  //   }
  // }, [formatedDate])

  //const API_Fake_Data = [{hea}]

  const onScrollHandler = (e: any) => {
    const res = onScrollHandlerFunc(e);

    if (!res.error && (res.contentOffset_Y || res.contentOffset_Y == 0)) {
      // if content scrolling on Y-axis is >= component height from top of the screen
      scrollIndex = res.contentOffset_Y / 26;
      console.log("ss", scrollIndex);

      let newDateObj = moment(startTimeState).add(scrollIndex, "days").toDate();

      // console.log(newDateObj);
      // formatedDate = moment(newDateObj).format("h:mm A - ddd dd MMM YY");
      formatedDate = moment(newDateObj).format(" DD-MM-YYYY - h:mm A");

      // formatedDateCard = moment(newDateObj).format("d MMM YY");
      //console.log(scrollIndex);
      headerTime = formatedDate;

      setTimeout(() => {
        //setHeaderTimeState(newDateObj.toString())
        setHeaderTimeState(formatedDate);
        //setFormatedDateCardState(formatedDateCard)
      }, 1000);
    } else if (res.error) console.log("err", res.error);
  };

  const TimeLineSlicer = () => {
    const slots = TimePeriodCalculator({
      startDate: startTimeState,
      endDate: endTimeState,
    });

    const n = Math.round(Number(slots));
    //console.log(n);
    // console.log(slots);
    return (
      <View>
        {[...Array(slots)].map((elementInArray, index) => {
          //console.log(index);
          if (index % 7 == 0) {
            if (index + 1 == slots) {
              return (
                <View key={index} style={styles.scrollViewContainer}>
                  <View style={{ ...styles.point, width: 45 * 1.5 }}></View>
                </View>
              );
            } else
              return (
                <View key={index} style={styles.scrollViewContainer}>
                  {index == 36 - 1 ? (
                    <>
                      <View
                        style={{
                          alignSelf: "flex-end",
                          position: "absolute",
                          transform: [{ translateY: -16 }, { translateX: 110 }],
                        }}
                      >
                        <Label
                          textStyle={{
                            alignItems: "center",
                            //textAlign: 'center',
                            fontSize: 8,
                            alignSelf: "baseline",
                          }}
                          labelContainerStyle={{
                            maxWidth: Dimensions.get("window").width * 0.33,
                            width: 130, //Dimensions.get("window").width * .33,
                            elevation: 5,
                            marginBottom: 0,
                            marginHorizontal: 0,
                            marginVertical: 0,
                            alignSelf: "baseline",
                          }}
                          numberOfLines={2}
                          label={
                            '09/08/2021 - "Leak turning into a burst in DMA3"'
                          }
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE}
                        />
                      </View>
                    </>
                  ) : (
                    <></>
                  )}

                  {/* Monday  */}
                  <View
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      transform: [{ translateY: -16 }, { translateX: -110 }],
                    }}
                  >
                    <Label
                      textStyle={{
                        alignItems: "center",
                        textAlign: "center",
                        fontSize: 8,
                        alignSelf: "center",
                      }}
                      labelContainerStyle={{
                        maxWidth: Dimensions.get("window").width * 0.33,
                        width: 80, //Dimensions.get("window").width * .33,
                        elevation: 5,
                        marginBottom: 0,
                        marginHorizontal: 0,
                        marginVertical: 0,
                        alignSelf: "baseline",
                      }}
                      numberOfLines={3}
                      label={
                        moment(startTimeState)
                          .add(index, "days")
                          .format("DD MMM YYYY")
                        //.toDate().toString()
                      }
                      color={colors.BLACK}
                      backgroundColor={colors.WHITE}
                    />
                  </View>

                  <View style={{ ...styles.point, width: 45 * 1.5 }}>
                    {/* alert point on alert message point index */}
                    {index == 36 - 1 ? (
                      <View
                        style={{
                          ...styles.pointAlert,
                          transform: [{ translateY: -4.5 }],
                        }}
                      />
                    ) : (
                      <View></View>
                    )}
                  </View>

                  {/* <View
                        style={{
                          alignSelf: "flex-end",
                          position: "absolute",
                          transform: [{ translateY: -16 }, { translateX: -70 }],
                        }}
                      >
                        <Label
                          textStyle={{
                            alignItems: 'center',
                            textAlign: 'center',
                            
                            alignSelf: 'center'
                          }}
                          labelContainerStyle={{
                            maxWidth: Dimensions.get("window").width * .33,
                            minWidth: 80 ,//Dimensions.get("window").width * .33,
                            elevation: 5,
                            marginBottom: 5,
                            marginHorizontal: 5,
                            marginVertical: 10,
                            alignSelf: 'center'
                          }}
                          numberOfLines={1}
                          label={'09/08/21'}
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE}
                        />
                      </View> */}
                  <View style={{ ...styles.square }} />
                </View>
              );
          } else if (index + 1 == slots) {
            return (
              <View key={index} style={styles.scrollViewContainer}>
                {/* 00 */}
                <View style={{ ...styles.point }}></View>
              </View>
            );
          } else {
            return (
              <View key={index} style={styles.scrollViewContainer}>
                {/* 05/09/2021 */}

                {index == 62 ? (
                  <>
                    <View
                      style={{
                        ...styles.pointAlert,
                        zIndex: 999,
                        position: "absolute",
                        transform: [{ translateY: -12 }, { translateX: -10 }],
                      }}
                    />
                    <View
                      style={{
                        alignSelf: "flex-end",
                        position: "absolute",
                        transform: [{ translateY: -16 }, { translateX: 110 }],
                      }}
                    >
                      <Label
                        textStyle={{
                          alignItems: "center",
                          //textAlign: 'center',
                          fontSize: 8,

                          alignSelf: "baseline",
                        }}
                        labelContainerStyle={{
                          maxWidth: Dimensions.get("window").width * 0.33,
                          width: 130, //Dimensions.get("window").width * .33,
                          elevation: 5,
                          marginBottom: 0,
                          marginHorizontal: 0,
                          marginVertical: 0,
                          alignSelf: "baseline",
                        }}
                        numberOfLines={2}
                        label={
                          '05/09/2021 - "Valve (V11) closure operation in DMA1"'
                        }
                        color={colors.BLACK}
                        backgroundColor={colors.WHITE}
                      />
                    </View>
                  </>
                ) : (
                  <></>
                )}

                {/* alert point on alert message point index */}
                {/* {(index==62) ? 
                        <View
                          style={{
                            ...styles.pointAlert,
                            transform: [{ translateY: -4.5 }],
                          }}
                        />
                        :<View></View>} */}

                {/* 09/09/2021 Thursday */}
                {index == 66 ? (
                  <>
                    <View
                      style={{
                        ...styles.pointAlert,
                        zIndex: 999,
                        position: "absolute",
                        transform: [{ translateY: -12 }, { translateX: -10 }],
                      }}
                    />
                    <View
                      style={{
                        alignSelf: "flex-end",
                        position: "absolute",
                        transform: [{ translateY: -16 }, { translateX: 110 }],
                      }}
                    >
                      <Label
                        textStyle={{
                          alignItems: "center",
                          //textAlign: 'center',
                          fontSize: 8,

                          alignSelf: "baseline",
                        }}
                        labelContainerStyle={{
                          maxWidth: Dimensions.get("window").width * 0.33,
                          width: 130, //Dimensions.get("window").width * .33,
                          elevation: 5,
                          marginBottom: 0,
                          marginHorizontal: 0,
                          marginVertical: 0,
                          alignSelf: "baseline",
                        }}
                        numberOfLines={2}
                        label={
                          '09/09/2021 - "Leak turning into a burst in DMA3"'
                        }
                        color={colors.BLACK}
                        backgroundColor={colors.WHITE}
                      />
                    </View>
                  </>
                ) : (
                  <></>
                )}
                {/* alert point on alert message point index */}

                {/* 21/09/21 Tuesday */}
                {index == 78 ? (
                  <>
                    <View
                      style={{
                        ...styles.pointAlert,
                        zIndex: 999,
                        position: "absolute",
                        transform: [{ translateY: -12 }, { translateX: -10 }],
                      }}
                    />
                    <View
                      style={{
                        alignSelf: "flex-end",
                        position: "absolute",
                        transform: [{ translateY: -16 }, { translateX: 110 }],
                      }}
                    >
                      <Label
                        textStyle={{
                          alignItems: "center",
                          //textAlign: 'center',
                          fontSize: 8,

                          alignSelf: "baseline",
                        }}
                        labelContainerStyle={{
                          maxWidth: Dimensions.get("window").width * 0.33,
                          width: 130, //Dimensions.get("window").width * .33,
                          elevation: 5,
                          marginBottom: 0,
                          marginHorizontal: 0,
                          marginVertical: 0,
                          alignSelf: "baseline",
                        }}
                        numberOfLines={2}
                        label={
                          '21/09/2021 - "Valve (V11) closure operation in DMA1"'
                        }
                        color={colors.BLACK}
                        backgroundColor={colors.WHITE}
                      />
                    </View>
                  </>
                ) : (
                  <></>
                )}

                <View style={{ ...styles.point }}></View>
                {/* alert point on alert message point index */}

                {/* 1 */}
                <View style={{ ...styles.square }} />
              </View>
            );
          }
        })}
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <View>
        <Header
          //{...props}
          //titleTextColor={colors.WHITE}
          titleTextColor={colors.WHITE}
          backgroundColor={colors.ARGON_PURPLE}
          title={"Timeline"}
          titleTextFontSize={FONTSIZE?.LG}
          titleStyle={{ fontWeight: "bold" }}
          headerRight={
            <View>
              <Text style={{ color: colors.WHITE }}>{headerTimeState}</Text>
            </View>
          }
        />
      </View>
      <View
        style={{ ...styles.timeLineContainer }}
        //timelinecontainerLayout
        // onLayout={(event) => {
        //   var { x, y, width, height } = event.nativeEvent.layout;
        //   setHeightState(height);
        //   console.log("timeLine Container =", height);
        // }}
      >
        <View
          style={{
            ...styles.marker,
            paddingRight: 110,
            top: Dimensions.get("window").height / 2 - 40,
          }}
        >
          <DotedLineFunc />
          {/* <FontAwesome5 name="play" size={24} color={colors.ARGON_PURPLE} /> */}
          {/* <Text>{currentTimeState}</Text> */}
        </View>

        <ScrollView
          scrollEventThrottle={1}
          ref={scrollViewRef}
          snap
          onScrollAnimationEnd={() => {}}
          onMomentumScrollEnd={onScrollHandler}
          snapToInterval={26}
          style={
            {
              // paddingRight: 110
              //width: Dimensions.get('window').width,
            }
          }
        >
          <View
            style={{
              ...styles.scrollViewContainer,
              flex: 1,
              marginTop: Dimensions.get("screen").height * 0.5 - 40,
              marginBottom: Dimensions.get("screen").height * 0.5,
              //marginTop: (heightState - headerHeightState) / 2 - 0.5 * 2,
              //marginBottom: (heightState + headerHeightState) / 2 - 0.5 * 2,
            }}
          >
            <View>
              <View style={{ flex: 1 }}>
                {/* <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />    
                */}
              </View>
              <View style={{ flex: 1 }}>{<TimeLineSlicer />}</View>
              <View style={{ flex: 1 }}>
                {/* <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} /> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          justifyContent: "flex-end",
          alignContent: "flex-end",
          alignSelf: "flex-end",
          bottom: 60,
          right: 20,
          alignItems: "flex-end",
        }}
      >
        <MaterialCommunityIcons
          name={fastClockState}
          size={40}
          color={colors.ARGON_PURPLE}
          onPress={() => {
            if (fastClockState == "rabbit") {
              setfastClockState("turtle");
              fastSpeedMode = false;
            } else {
              setfastClockState("rabbit");
              fastSpeedMode = true;
            }
          }}
        />
        <MaterialCommunityIcons
          onPress={() => {
            playButtonState == "play-circle"
              ? setPlayButtonState("stop-circle")
              : setPlayButtonState("play-circle");
            console.log(scrollIndex);

            //console.log(dateAtIndex);

            //if play button is active and stop circle is showing
            if (playButtonState == "play-circle") {
              playmode = true;
              playTime = moment();
              //currentTime = new Date().toLocaleTimeString();
              //   var playTimeIntervalID = setInterval(() => {
              //    // playTime = playTime + 1;
              //     console.log('playtime', playTime)
              //  }, 1000);

              //console.log(new Date().toLocaleTimeString());
              //if(currentTime - playTime >=5){
              //call step
              //}
              console.log("play mode is true");
              // axios
              //   .post(
              //     "https://iva-api-management.azure-api.net/iva/v1/datareplay",
              //     {
              //       replay_request: {
              //         userID: "1234567890",
              //         command: "START",
              //         val: dateAtIndex, //"19 Jan 2022 16:05:50 GMT" //fD //
              //       },
              //     },
              //     {
              //       headers: {
              //         "Ocp-Apim-Subscription-Key":
              //           "8e522f5dd33b4892b2a8e149d504b153",
              //         "Ocp-Apim-Trace": true,
              //         "Content-Type": "application/json",
              //       },
              //     }
              //   )
              //   .then(function (response) {
              //     console.log(response);
              //   })
              //   .catch(function (error) {
              //     console.log(error);
              //   });
            } else {
              playmode = false;
              console.log("play mode inactive");
              //if(playTime!=0)
            }
          }}
          //slowlyScrollDown();

          name={`${playButtonState}`}
          size={40}
          color={colors.ARGON_PURPLE}
        />
      </View>
    </View>
  );
};

//export default Timeline.screen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.WHITE,
  },

  dottedLine: {
    width: 2,
    backgroundColor: colors.BLACK,
    height: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  dottedLinePrime: {
    width: 2,
    backgroundColor: colors.WHITE,
    height: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  square: {
    width: 2,
    height: 24,
    backgroundColor: colors.BLACK,
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

  marker: {
    //width: Dimensions.get("window").width,
    transform: [{ translateY: -9 }, { translateX: -50 }],
    //translateY: -12,
    zIndex: -999,
    //backgroundColor: colors.ARGON_PURPLE,
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center'
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },

  triangleRight: {
    transform: [{ rotate: "90deg" }],
  },

  scrollViewContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    //backgroundColor: "yellow",
  },

  timeLineContainer: {
    // transform: [{ translateX: -40 }],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow",
  },
});
