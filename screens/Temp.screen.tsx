import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ItemCardMediaHorizontalScrollView } from "../components/ItemCardMediaHorizontalScrollView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from '../components/Color';

export const TempScreen = () => {
  return (
    <View>
                  <View style={{ marginTop: 10, marginBottom: 20 }}>
              <ItemCardMediaHorizontalScrollView
               // imageSource={{ image: img.igdb.guardiansOfTheGalaxyMarvel }}
                title="guardians of the Galaxy"
                subTitle1="1:05 PM - 5 Nov 21"
                subTitle2="Nicoll Highway 2 Street ABC"
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
                //imageHeight={104}
                //imageWidth={78}
                //iconSource={{ image: img.icon.ps4 }}
                //iconHeight={12}
                //iconWidth={52}
              />
            </View>
    </View>
  )
}

//export default Temp

const styles = StyleSheet.create({})