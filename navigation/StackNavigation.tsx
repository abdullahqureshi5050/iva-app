import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { RootScreen } from "../screens/Root.screen";

// import { SignUpScreen } from "../screens/Signup.screen";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomStackNav } from "./BottomStackNav";
import { colors } from "../components/Color";
import { FONTSIZE } from "../static/FontSize";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"BottomStackNav"}
      // screenOptions={{
      //   headerShown: true,
      //   //headerStyle: { backgroundColor: 'tomato' },
      // }}
      screenOptions={{
        headerShown: false,
        //header: ,
        title: "Home",
        headerRight: (props) => {
          return (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={colors.FOREST_GREEN}
              onPress={() => {
                // navigation.navigate({
                //   //name = "component" in stack navaigation, not screen prop "name" property.
                //   name: 'NotificationScreen', });
              }}
            />
          );
        },
       
      }}
    >
      {/* <Stack.Screen name="BottomStackNav" component={BottomStackNav} options={({ navigation }) => ({ headerRight: ()=> BottomStackScreenOptions.headerRight(navigation) })} /> */}
      <Stack.Screen
        name="BottomStackNav"
        component={BottomStackNav}
        options={({ navigation }) => ({})}
      />
      
      
    </Stack.Navigator>
  );
};

const MapsScreenOptions = {
  headerTitle: "",
  headerShown: false,
  headerBackTitleVisible: false,
  headerRight: (navigation: any) => (
    <Ionicons
      name="notifications"
      size={25}
      onPress={() => {
        /* return navigation.navigate('BottomStackNav')*/
      }}
    />
  ),
};
