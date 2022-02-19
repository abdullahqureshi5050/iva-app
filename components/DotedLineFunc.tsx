import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './Color'

export const DotedLineFunc = ()=>{
    return (
      <View style={{flexDirection: 'row', padding: 0, margin: 0, width: Dimensions.get('window').width}}>
      <Text style={{ color: colors.WHITE }}>{}</Text>
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
          <View style={styles.dottedLine} />
          <View style={styles.dottedLinePrime} />
          <View style={styles.dottedLine} />
          <View style={styles.dottedLinePrime} />
          <View style={styles.dottedLine} />
          <View style={styles.dottedLinePrime} />
          <View style={styles.dottedLine} />
          <View style={styles.dottedLinePrime} />
    </View>
    )
  }

const styles = StyleSheet.create({

  dottedLine: {
    width: 8,
    backgroundColor: 'red',
    height: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'
  },

  dottedLinePrime: {
    width: 8,
    backgroundColor: colors.WHITE,
    height: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center'
  },
  
})

