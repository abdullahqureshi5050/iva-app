import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CalculationsScreen } from "../screens/Calculations.screen";
import { ExpectationsScreen } from "../screens/Expectations.Screen";
import { MessageScreen } from "../screens/Message.screen";
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
  return ( 
      <Tab.Navigator>
        <Tab.Screen name="Calculations" component={CalculationsScreen} />
        <Tab.Screen name="Expectations" component={ExpectationsScreen} />
      </Tab.Navigator>
      );
};
