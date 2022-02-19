import { StatusBar as TopStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import React, {useState} from "react";

import { Nav } from "./navigation/Nav";

export default function App() {
  return (
    <View style={styles.container}>
      <TopStatusBar style="auto" />   
      <Nav/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
