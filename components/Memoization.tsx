import React, {memo} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { colors } from './Color';
import { Label } from "../components/Label";

const Memoization = ({item, numberOfTimes}: any) => {
    
    const Item = ({ id }: any) => {
        // Mon to sunday 0-6 index, Next Monday 7th index, so
        if (id % 7 == 0) {
          //no line after pt in last point case
          if (id + 1 == numberOfTimes) {
           
                 return (
                      <View key={id} style={styles.scrollViewContainer}>
                      {/* 00 */}
                      <View style={{ ...styles.point, width: 45 * 1.5 }}></View>
                    </View>
                 )
  
           } else
          return (
                  <View key={id} style={styles.scrollViewContainer}>
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
              )
          
  
         } else if (id + 1 == numberOfTimes) {
           return (
                  <View key={id} style={styles.scrollViewContainer}>
                  {/* 00 */}
                  <View style={{ ...styles.point }} ></View>
                </View>
              )
     
  
         } else {
         return (
                  <View key={id} style={styles.scrollViewContainer}>
                  {/* 00 */}
                  <View style={{ ...styles.point }} >
  
                  </View>
                  {/* 1 */}
                  <View style={{ ...styles.square }} />
                </View>
              )
        }
    
     
  }
        return (
            <Item id={item.id} />
        );
    };

    export default memo(Memoization);
    

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
      });
      
    