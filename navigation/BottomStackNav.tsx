import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";

//Nav imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { KnowledgeStackNav } from "./KnowledgeStackNav";

//screens
import { MessageScreen } from "../screens/Message.screen";
import { ChatScreen } from "../screens/Chat.screen";
import { FlyerChatScreen } from "../screens/FlyerChat";
import { BookmarkScreen } from "../screens/Bookmark.screen";

import { MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons";
import { colors } from "../components/Color";
import { TopTabs } from "./TopStackNav";
import  { TimelineScreen }  from "../screens/Timeline.screen";


const Tab = createMaterialBottomTabNavigator();

//const Tab = createBottomTabNavigator();

export const BottomStackNav = function () {
  return (
    <Tab.Navigator
      shifting={true}
      screenOptions={{
        tabBarColor: colors.ARGON_PURPLE
        //headerShown: false,
        //tabBarInactiveTintColor: colors.BLACK,
        //tabBarActiveTintColor: colors.BLACK,
        // headerRight: (props: any) => {
        //   return (
        //     <MaterialCommunityIcons
        //       name="bell-outline"
        //       size={24}
        //       color={colors.BLACK}
        //       onPress={() => {
        //         console.log("notification icon pressed");
        //       }}
        //     />
        //   );
        // },

        // default undefined
        // headerLeftLabelVisible: true,
        // headerLeft: (props: any) => {
        //   return (
        //     props.labelVisible && (
        //       <MaterialCommunityIcons
        //         name="keyboard-backspace"
        //         size={24}
        //         color={props.tintColor || colors.BLACK}
        //       />
        //     )
        //   );
        // },

       // headerTitleAlign: "center",
        // headerStyle: {
        //   height: 40,
        //   borderBottomWidth: 0.5,
        //   borderBottomColor: colors.BLACK,
        //   //backgroundColor: 'red',
        // },
        // tabBarStyle: {
        //   paddingBottom: 5,
        // },

        // headerRightContainerStyle: {
        //   //flex: 0,
        //   paddingRight: 10,
        // },

        // headerLeftContainerStyle: {
        //   paddingLeft: 10,
        // },
      }}
    >
      <Tab.Screen
        name="Chat"
        component={MessageScreen}
        options={({ route, navigation }) => ({
    
          headerRight: (props: any) => {
            return (
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color={colors.BLACK}
                onPress={() => {
                  navigation.navigate({ 
                    //name = "component" in stack navaigation, not screen prop "name" property.
                    name: 'NotificationScreen', });
                }}
              />
            );
          },
          // headerTintColor: colors.FOREST_GREEN,
          // tabBarActiveTintColor: colors.FOREST_GREEN,
          headerShown: false,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
          //headerTitleStyle: {width: '100%', alignItems: 'flex-end', backgroundColor: 'red', fontSize: 20},
          //headerTitleAllowFontScaling: true,
          //headerRightContainerStyle: { maxWidth: 30, alignItems: 'flex-end' , backgroundColor: 'lightblue'},
          
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="message"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="message-outline"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Watchlist"
        component={BookmarkScreen}
        options={{
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          // headerShown: true,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="eye"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
    
      <Tab.Screen
        name="Info"
        component={KnowledgeStackNav}
        options={{
          //  headerShown: true,
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <Ionicons
                name="bulb"
                size={props.size || 24}
                color={props.color || colors.BLACK}
              />
            ) : (
              <Ionicons
                name="bulb-outline"
                size={props.size || 24}
                color={props.color || colors.BLACK}
              />
            );
          },
        }}
      />
         <Tab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          //  headerShown: true,
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="timeline-clock"
                size={props.size || 24}
                color={props.color || colors.BLACK}
              />
            ) : (
              <MaterialCommunityIcons
              name="timeline-clock-outline"
              size={props.size || 24}
              color={props.color || colors.BLACK}
            />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
