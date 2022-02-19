// used to map same component n number of times

import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "./Color";
import { Label } from "./Label";
import TimePeriodCalculator from "./TimePeriodCalculator";

type mappingProps = {
    numberOfTimes: number
}

var DATA: any = [];

export const MappingTimeLineArray = (props: mappingProps) => {



  const { numberOfTimes } = props;

  const slots = TimePeriodCalculator({
    startDate: "2021-07-05 00:00",
    endDate: "2022-09-29 00:00",

  });


  [...Array(numberOfTimes)].map((elementInArray, index) => {
    
    // Mon to sunday 0-6 index, Next Monday 7th index, so
    if (index % 7 == 0) {
        //no line after pt in last point case 
        if (index + 1 == numberOfTimes) {
            DATA.push({
                id: index,
                component: (
                    <View key={index} style={styles.scrollViewContainer}>
                    {/* 00 */}
                    <View style={{ ...styles.point, width: 45 * 1.5 }}></View>
                  </View>
                ),
              });
         
        } else
        DATA.push({
            id: index,
            component: (
                <View key={index} style={styles.scrollViewContainer}>
                <View
                  style={{
                    alignSelf: "flex-end",
                    position: "absolute",
                    transform: [{ translateY: -16 }, { translateX: 70 }],
                  }}
                >
                  <Label
                    labelContainerStyle={{
                      maxWidth: Dimensions.get("window").width * 0.33,
                      elevation: 5,
                      marginBottom: 5,
                      marginHorizontal: 5,
                      marginVertical: 10,
                    }}
                    numberOfLines={1}
                    label={'Data'}
                    color={colors.BLACK}
                    backgroundColor={colors.WHITE}
                  />
                </View>
                <View style={{ ...styles.point, width: 45 * 1.5 }}>
                  <View
                    style={{
                      ...styles.pointAlert,
                      transform: [{ translateY: -4.5 }],
                    }}
                  />
                </View>
                <View style={{ ...styles.square }} />
              </View>
            ),
          });
     
      } else if (index + 1 == numberOfTimes) {
        
        DATA.push({
            id: index,
            component: (
                <View key={index} style={styles.scrollViewContainer}>
                {/* 00 */}
                <View style={{ ...styles.point }} ></View>
              </View>
            ),
          });

      } else {
        DATA.push({
            id: index,
            component: (
                <View key={index} style={styles.scrollViewContainer}>
                {/* 00 */}
                <View style={{ ...styles.point }} >
               
                </View>
                {/* 1 */}
                <View style={{ ...styles.square }} />
              </View>
            ),
          });
      }


  });
  //console.log('data =',data[222])
  return DATA;
};

const styles = StyleSheet.create({
    
    scrollViewContainer: {
        justifyContent: "center",
        alignItems: "center",
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
    
    
});
