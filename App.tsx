import { StatusBar as TopStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from 'react-native';
import React, {useState} from "react";

// global.XMLHttpRequest = require('xhr2');
// global.WebSocket = require('ws');
global.XMLHttpRequest = require("xhr2");

import { Nav } from "./navigation/Nav";

export default function App() {
  return (
    <View style={styles.container}>
    <SafeAreaView style={{flex:1}}>
    
      <TopStatusBar style="auto" />   
      <Nav/>
      </SafeAreaView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : StatusBar.currentHeight
  },
});
