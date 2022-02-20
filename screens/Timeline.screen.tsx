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
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { DotedLineFunc } from "../components/DotedLineFunc";

export const TimelineScreen = () => {
  const [startTimeState, setStartTimeState] = useState( "2021-07-05 00:00");
  const [endTimeState, setEndTimeState] = useState("2022-07-29 00:00");
  const [headerTimeState, setHeaderTimeState] = useState("0");
  const [formatedDateCardState, setFormatedDateCardState] = useState("");
  const [date1State, setDate2State] = useState("0");
  const [playButtonState, setPlayButtonState] = useState('play-circle');
  const [fastClockState, setfastClockState] = useState('speedometer');
  const [offsetState,setOffsetState] = useState(0);

  const scrollViewRef = useRef();
  let labelShown = false; 
  let headerTime = '0';
  let date1: any = '';
useEffect(() => {
  //first
  headerTime = "2021-07-05 00:00";
  //formatedDateCard = moment(startTimeState).format("d MMM YY");
  //date1 = moment(startTimeState).add(60 , "days").toDate();
  //moment(startTimeState).format("d MMM YY");
  //setFormatedDateCardState(formatedDateCard)
  //setStartTimeState("2021-07-05 00:00")
  //setEndTimeState("2022-07-29 00:00")

  
  return () => {
   // second
  }
}, [headerTimeState, startTimeState])

  let formatedDate: React.SetStateAction<string>;
  let formatedDateCard: React.SetStateAction<string>;

  const slowlyScrollDown = () => {
    //offset + 80
    const y = offsetState  + 26;
    scrollViewRef.current.scrollTo({x: 0, y, animated: true});
    setOffsetState(y);
}
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
      const scrollIndex = res.contentOffset_Y / 26;
      var newDateObj = moment(startTimeState)
        .add(scrollIndex , "days")
        .toDate();
        
        formatedDate = moment(newDateObj).format("h:mm A - ddd d MMM YY");
       // formatedDateCard = moment(newDateObj).format("d MMM YY");
         //console.log(scrollIndex);
          headerTime = formatedDate;
          
          setTimeout(()=>{
            setHeaderTimeState(formatedDate)
            //setFormatedDateCardState(formatedDateCard)
          }, 1500);

  
       
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


                     {(index==36-1) ? <>
                     <View
                       style={{
                        alignSelf: "flex-end",
                        position: "absolute",
                        transform: [
                          { translateY: -16 },
                          { translateX: 110 }
                        ],
                      }}
                    >
                      <Label
                        textStyle={{
                          alignItems: 'center',
                          //textAlign: 'center',
                          fontSize: 8,
                          alignSelf: 'baseline',
                        }}
                        labelContainerStyle={{
                          maxWidth: Dimensions.get("window").width * .33,
                          width: 130 ,//Dimensions.get("window").width * .33,
                          elevation: 5,
                          marginBottom: 0,
                          marginHorizontal: 0,
                          marginVertical: 0,
                          alignSelf: 'baseline'
                        }}
                          numberOfLines={2}
                          label={'09/08/2021 - "Leak turning into a burst in DMA3"'}
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE}
                        />
                      </View>
                      
                      </> :<></>}



                       {/* Monday  */}
                      <View
                        style={{
                          alignSelf: "flex-start",
                          position: "absolute",
                          transform: [{ translateY: -16 }, { translateX: -110 }],
                        }}
                      >
                        <Label
                          textStyle={{
                            alignItems: 'center',
                            //textAlign: 'center',
                            fontSize: 8,
                            alignSelf: 'baseline',
                          }}
                          labelContainerStyle={{
                            maxWidth: Dimensions.get("window").width * .33,
                            width: 80 ,//Dimensions.get("window").width * .33,
                            elevation: 5,
                            marginBottom: 0,
                            marginHorizontal: 0,
                            marginVertical: 0,
                            alignSelf: 'baseline'
                          }}
                          numberOfLines={3}
                          label={moment(startTimeState)
                            .add(index , "days")
                            .toDate().toString()}
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE}
                        />
                      </View>

                      <View style={{ ...styles.point, width: 45 * 1.5 }}>
                          {/* alert point on alert message point index */}
                      {(index==36-1) ? 
                        <View
                          style={{
                            ...styles.pointAlert,
                            transform: [{ translateY: -4.5 }],
                          }}
                        />
                        :<View></View>}

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
                    <View style={{ ...styles.point }} ></View>
                  </View>
                );
              } else {
                return (
                  <View key={index} style={styles.scrollViewContainer}>

                    
                      {/* 05/09/2021 */}

                      {(index==62) ? <>
                        <View
                          style={{
                            ...styles.pointAlert,
                            zIndex: 999,
                            position: 'absolute',
                            transform: [{ translateY: -12 }, { translateX: -10 }],
                          }}
                        />
                     <View
                        style={{
                          alignSelf: "flex-end",
                          position: "absolute",
                          transform: [
                            { translateY: -16 },
                            { translateX: 110 }
                          ],
                        }}
                      >
                        <Label
                          textStyle={{
                            alignItems: 'center',
                            //textAlign: 'center',
                            fontSize: 8,
                           
                            alignSelf: 'baseline',
                          }}
                          labelContainerStyle={{
                            maxWidth: Dimensions.get("window").width * .33,
                            width: 130 ,//Dimensions.get("window").width * .33,
                            elevation: 5,
                            marginBottom: 0,
                            marginHorizontal: 0,
                            marginVertical: 0,
                            alignSelf: 'baseline'
                          }}
                          numberOfLines={2}
                          label={'05/09/2021 - "Valve (V11) closure operation in DMA1"'}
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE}
                        />
                      </View>
                      
                      </> :<></>}


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
               { (index==66)?
                     <>
                     <View
                          style={{
                            ...styles.pointAlert,
                            zIndex: 999,
                            position: 'absolute',
                            transform: [{ translateY: -12 }, { translateX: -10 }],
                          }}
                        />
                     <View
                        style={{
                          alignSelf: "flex-end",
                          position: "absolute",
                          transform: [
                            { translateY: -16 },
                            { translateX: 110 }
                          ],
                        }}
                      >
                        <Label
                          textStyle={{
                            alignItems: 'center',
                            //textAlign: 'center',
                            fontSize: 8,
                           
                            alignSelf: 'baseline',
                          }}
                          labelContainerStyle={{
                            maxWidth: Dimensions.get("window").width * .33,
                            width: 130 ,//Dimensions.get("window").width * .33,
                            elevation: 5,
                            marginBottom: 0,
                            marginHorizontal: 0,
                            marginVertical: 0,
                            alignSelf: 'baseline'
                          }}
                          numberOfLines={2}
                          label={'09/09/2021 - "Leak turning into a burst in DMA3"'}
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE}
                        />
                      </View>
                      </> : <></>}
                           {/* alert point on alert message point index */}
                     

                      {/* 21/09/21 Tuesday */}
                      { (index==78)?
                     <>
                     <View
                          style={{
                            ...styles.pointAlert,
                            zIndex: 999,
                            position: 'absolute',
                            transform: [{ translateY: -12 }, { translateX: -10 }],
                          }}
                        />
                        <View
                     style={{
                      alignSelf: "flex-end",
                      position: "absolute",
                      transform: [
                        { translateY: -16 },
                        { translateX: 110 }
                      ],
                    }}
                  >
                    <Label
                      textStyle={{
                        alignItems: 'center',
                        //textAlign: 'center',
                        fontSize: 8,
                       
                        alignSelf: 'baseline',
                      }}
                      labelContainerStyle={{
                        maxWidth: Dimensions.get("window").width * .33,
                        width: 130 ,//Dimensions.get("window").width * .33,
                        elevation: 5,
                        marginBottom: 0,
                        marginHorizontal: 0,
                        marginVertical: 0,
                        alignSelf: 'baseline'
                      }}
                          numberOfLines={2}
                          label={'21/09/2021 - "Valve (V11) closure operation in DMA1"'}
                          color={colors.BLACK}
                          backgroundColor={colors.WHITE} />
                      </View></> : <></>}

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
        style={{...styles.timeLineContainer}}
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
          ref={scrollViewRef}
          onMomentumScrollEnd={
            //()=>console.log(Dimensions.get('window').height)
            onScrollHandler
          }
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
              <View style={{flex: 1}}>
                {/* <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} /> */}
           
              </View>
              <View style={{flex: 1}}>
                {<TimeLineSlicer />}
              </View>
              <View style={{flex: 1}}>
                {/* <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} />
                <View style={styles.dottedLinePrime} />
                <View style={styles.dottedLine} /> */}
           
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{
          position: 'absolute',
          justifyContent: 'flex-end', 
          alignContent: 'flex-end',
          alignSelf: 'flex-end',
          bottom: 60,
          right: 20,
          alignItems: 'flex-end'
      }}>
                    <MaterialCommunityIcons 
              name={fastClockState}
              size={60} 
              color={colors.ARGON_PURPLE} 
              onPress={
                ()=>{
                  fastClockState=='speedometer' ? setfastClockState('speedometer-slow'):setfastClockState('speedometer')} 
              }
            />
          <MaterialCommunityIcons 
            onPress={
              ()=>{
                playButtonState=='play-circle' ? setPlayButtonState('stop-circle'):setPlayButtonState('play-circle');
                slowlyScrollDown();
              } 
            }
            name={`${playButtonState}`} size={60} color={colors.ARGON_PURPLE} />

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
    alignSelf: 'center'
  },

  dottedLinePrime: {
    width: 2,
    backgroundColor: colors.WHITE,
    height: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'
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
