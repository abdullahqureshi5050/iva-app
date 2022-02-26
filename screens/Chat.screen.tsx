// chat screen funtional with API

import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  //useLayoutEffect,
} from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { View, Button, Text } from "react-native";
import axios from "axios";
import { DirectLine } from "botframework-directlinejs";
import { Header } from "../navigation/Header";
import { colors } from "../components/Color";
import { FONTSIZE } from "../static/FontSize";
import { Label } from "../components/Label";
import { ButtonC } from "../components/Button";

import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

import RBSheet from "react-native-raw-bottom-sheet";

var token: any;
var expiresIn: any;
var conversationId: any;
var config: any;
let count = 1;
let serverMsgID: any = [];
var directLine: any; //= new DirectLine();

const secret = "FDtdf77b6yk.M_LsqLypdwONy7IzSiI9ibN91ENzrpq2xvYIWvZOtk4";

//working secret
//FDtdf77b6yk.SwCgCA-INHIjabHDT7p-phmzEQUxKRGQu_P4_xTUHk8

//old bot secret depracated
//6vBE5M8DY44.4eylrhaj3gsSPxb7ytvL2iPheAkWql6xD_YNVvALrlo

export const ChatScreen = () => {
  const [messages, setMessages] = useState([{}]);
  const refRBSheet: any = useRef();

  useEffect(() => {
    try {
      axios
        .post(
          "https://directline.botframework.com/v3/directline/tokens/generate",
          {},
          {
            headers: {
              Authorization: `Bearer ${secret}`,
            },
          }
        )
        .then((res) => {
          if (res.data) {
            conversationId = res.data.conversationId;
            expiresIn = res.data.expires_in;
            token = res.data.token;
            console.log("api token call sucessful");

            config = {
              secret: secret,
              token: res.data.token,
            };

            directLine = new DirectLine(config);
            //postActivity();
            setMessages([
              {
                _id: count,
                text: "Hello developer",
                createdAt: new Date(),
                user: {
                  _id: 2,
                  //name: 'React Native',
                  //  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ]);
          }
          //  console.log("res =", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log("err ==", error);
    }

    //axios res => setMessage
  }, []);

  const postActivity = (props: any) => {
    const { text } = props;
    console.log("post activity called");
    directLine
      .postActivity({
        // optional id & name for bot to know user uniquely
        from: { id: "myUserId", name: "myUserName" },
        type: "message",
        text: text,
      })
      .subscribe(
        (id: any) => console.log("Posted activity, assigned ID ", id),
        (error: any) => console.log("Error posting activity", error)
      );

    directLine.activity$.subscribe((activity: any) => {

      //--------------------------------write id filter logic here 
      console.log(activity.id);

      
      //--------------------------------id filter logic end

      // if (serverMsgID.length == 0) {
      //   serverMsgID.push(activity.id);
      //   console.log("0: ", activity.id);
      // } else {
      //   serverMsgID.push("1: ", activity.id);
      //   console.log("1: ", activity.id);
      // }

      // if (
      //   serverMsgID.length > 0 &&
      //   serverMsgID[serverMsgID.length - 1] == activity.id
      // ) {
      //   console.log("inside");
      //   return;
      // }

      //console.log(`serverMsgID[serverMsgID.length] = ${serverMsgID}`);

      const obj = [
        {
          _id: count + 1, //activity.id,
          text: activity.text,
          createdAt: new Date(),

          user: {
            _id: 2,
          },
        },
      ];
      count++;
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages as any, obj)
      );
      //return obj;
      //console.log(`"received activity ${count}", activity.text`);
    });
  };

  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text } = messages[0];
    postActivity({ text });
    //if(res)
    //console.log(`${++count}: messages`);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages as any, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.WHITE }}>
      <Header
        //{...props}
        titleTextColor={colors.WHITE}
        backgroundColor={colors.ARGON_PURPLE}
        title={"Chat"}
        titleTextFontSize={FONTSIZE?.LG}
        titleStyle={{ fontWeight: "bold" }}
        headerRight={
          <View>
            <Text style={{ color: colors.WHITE }}>1:30 PM - 5 Nov 22</Text>
          </View>
        }
      />
      <GiftedChat
        renderSend={({ text, onSend }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="send"
              size={24}
              color={colors.ARGON_PURPLE}
              onPress={() => {
                if (text && onSend) {
                  onSend({ text: text.trim() }, true);
                }
              }}
            />

            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
              }}
            >
              <ButtonC
                //onPress={refRBSheet.current?.open()}
                onPress={() => refRBSheet.current?.open()}
                textContainerStyle={{
                  marginLeft: 10,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  borderColor: colors.WHITE,
                  shadowColor: colors.WHITE,

                  //borderWidth: 1,
                  //borderRadius: 1,
                  //elevation: 5,
                }}
                title={
                  <MaterialCommunityIcons
                    style={{
                      justifyContent: "center",
                      alignContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                    name="microphone"
                    size={30}
                    color={colors.ARGON_PURPLE}
                  />
                }
                //textContainerStyle={{ backgroundColor: "red" }}
                //titleShown={false}
                textStyle={{
                  //margin: 0,
                  // padding: 0,
                  justifyContent: "center",
                  alignContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  backgroundColor: colors.WHITE,
                  alignSelf: "flex-end",
                  //padding: 10,
                }}
              ></ButtonC>
              {/* microphone btn useRef RBSheet */}
              {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                  wrapper: {
                    backgroundColor: "transparent",
                  },
                  draggableIcon: {
                    backgroundColor: "#000",
                  },
                }}
              >
                {/* <YourOwnComponent /> */}
                <View
                  style={{
                    justifyContent: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text>Speech to Text...</Text>
                </View>
              </RBSheet>
            </View>
          </View>
        )}
        messages={messages as any}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        listViewProps={{
          style: {
            backgroundColor: colors.WHITE,
            marginBottom: 50,
          },
        }}
        renderBubble={(props: any) => {
          return (
            <Bubble
              {...props}
              textStyle={{
                right: {},
              }}
              wrapperStyle={{
                left: {
                  //  backgroundColor: 'red',
                  color: colors.BLACK,
                  backgroundColor: colors.BUBBLE,
                },
              }}
            />
          );
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: colors.WHITE,
          bottom: 50,
        }}
      >
        <Label
          labelContainerStyle={{
            padding: 5,
            marginRight: 5,
            borderColor: colors.WHITE,
            borderWidth: 1,
            backgroundColor: colors.GRAY,
          }}
          label={"Work in Progress!"}
          color={colors.BLACK}
          backgroundColor={colors.DARK_GRAY}
        />
        <Label
          //fontSize={FONTSIZE.}
          labelContainerStyle={{
            padding: 5,
            marginRight: 5,
            borderColor: colors.WHITE,
            borderWidth: 1,
            backgroundColor: colors.GRAY,
          }}
          label={"Notify if"}
          color={colors.BLACK}
          backgroundColor={colors.DARK_GRAY}
        />
        <Label
          labelContainerStyle={{
            padding: 5,
            marginRight: 5,
            borderColor: colors.WHITE,
            borderWidth: 1,
            backgroundColor: colors.GRAY,
          }}
          label={"Report Daily"}
          color={colors.BLACK}
          backgroundColor={colors.DARK_GRAY}
        />
      </View>
    </View>
  );
};
