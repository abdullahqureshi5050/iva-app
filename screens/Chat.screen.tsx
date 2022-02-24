import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, Button } from "react-native";
import axios from "axios";

var token: any;
var expiresIn: any;
var conversationId: any;

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
            Authorization:
              "Bearer 6vBE5M8DY44.4eylrhaj3gsSPxb7ytvL2iPheAkWql6xD_YNVvALrlo",
          },
        }
      )
      .then((res) => {
        if(res.data){
          conversationId = res.data.conversationId;
          expiresIn = res.data.expires_in;
          token = res.data.token;
          console.log('api token call sucessful');
          setMessages([
            // {
            //   _id: 1,
            //   text: `Hello developer token = ${token}`,
            //   createdAt: new Date(),
            //   user: {
            //     _id: 2,
            //     name: "React Native",
            //     avatar: "https://placeimg.com/140/140/any",
            //   },
            // },
            {
              _id: 2,
              text: `Hello developer, Token ExpiresIn = ${expiresIn} ${'\n'} conversation Id = ${conversationId}`,
              createdAt: new Date(),
              user: {
                _id: 3,
                name: "React Native",
                avatar: "https://placeimg.com/140/140/any",
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
      console.log('err ==', error)
    }



    //axios res => setMessage

  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    // <View>
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};
