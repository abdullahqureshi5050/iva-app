import React from "react";
import { View, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

type BottomAnimationDrawer = {
    ref?: any,
    component: any, 
}

export const BottomAnimatedDrawer = (props: BottomAnimationDrawer)=> {
    const {ref, component} = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <RBSheet
        //ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        {/* <YourOwnComponent /> */}
        <View>
            {component}
        </View>
      </RBSheet>
    </View>
  );
}