import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { View, Button, Text } from "react-native";
import axios from "axios";
import { DirectLine } from "botframework-directlinejs";
import { Header } from "../navigation/Header";
import { colors } from "../components/Color";
import { FONTSIZE } from "../static/FontSize";
import { Label } from "../components/Label";

var token: any;
var expiresIn: any;
var conversationId: any;
var config: any;
let count = 1;
let serverMsgID: any = [];
var directLine: any; //= new DirectLine();

const secret = "FDtdf77b6yk.M_LsqLypdwONy7IzSiI9ibN91ENzrpq2xvYIWvZOtk4";
//FDtdf77b6yk.SwCgCA-INHIjabHDT7p-phmzEQUxKRGQu_P4_xTUHk8
//old bot
//6vBE5M8DY44.4eylrhaj3gsSPxb7ytvL2iPheAkWql6xD_YNVvALrlo

export const ChatScreen = () => {
  const [messages, setMessages] = useState([{}]);

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
              ///* put your Direct Line secret here */,
              token: res.data.token,
              //conversationId: res.data.conversationId,
              ///* or put your Direct Line token here (supply secret OR token, not both) */,
              //domain: /* optional: if you are not using the default Direct Line endpoint, e.g. if you are using a region-specific endpoint, put its full URL here */
              //webSocket: /* optional: false if you want to use polling GET to receive messages. Defaults to true (use WebSocket). */,
              //pollingInterval: /* optional: set polling interval in milliseconds. Default to 1000 */,
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
      console.log(serverMsgID.length);

      if (serverMsgID.length == 0) {
        serverMsgID.push(activity.id);
        console.log("0: ", activity.id);
      } else {
        serverMsgID.push("1: ", activity.id);
        console.log("1: ", activity.id);
      }

      if (
        serverMsgID.length > 0 &&
        serverMsgID[serverMsgID.length - 1] == activity.id
      ) {
        console.log("inside");
        return;
      }
      console.log(`serverMsgID[serverMsgID.length] = ${serverMsgID}`);
      const obj = [
        {
          _id: activity.id,
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
          alignSelf: 'center',
          alignContent: 'center',
          alignItems:'center',
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
