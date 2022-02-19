import { createStackNavigator } from '@react-navigation/stack';
import { TopTabs } from './TopStackNav';
import { Header } from "./Header";
import { colors } from '../components/Color';
import React from 'react';
import { ButtonC } from '../components/Button';
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { FONTSIZE } from '../static/FontSize';

const Stack = createStackNavigator();

export const KnowledgeStackNav = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        //headerShown: false,
        header: ()=>{
            return (
                <Header
                //{...props}
                titleTextColor={colors.WHITE}
                backgroundColor={colors.ARGON_PURPLE}
                title={"Knowledge"}
                titleTextFontSize={FONTSIZE?.LG}
                titleStyle={{ fontWeight: "bold" }}
              />   
            )
        },
        //title: "Knowledge",
    }}
    >
      <Stack.Screen name="Knowledge" component={TopTabs} />
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
    </Stack.Navigator>
  );
}