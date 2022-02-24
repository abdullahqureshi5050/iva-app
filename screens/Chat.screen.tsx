import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { View, Button } from "react-native";
import axios from "axios";
import { DirectLine } from 'botframework-directlinejs';

var token: any;
var expiresIn: any;
var conversationId: any;
var config: any;
 
var directLine: any; //= new DirectLine();

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

          config = {
            secret: "6vBE5M8DY44.4eylrhaj3gsSPxb7ytvL2iPheAkWql6xD_YNVvALrlo", 
            ///* put your Direct Line secret here */,
            token: res.data.token, 
            //conversationId: res.data.conversationId,
            ///* or put your Direct Line token here (supply secret OR token, not both) */,
            //domain: /* optional: if you are not using the default Direct Line endpoint, e.g. if you are using a region-specific endpoint, put its full URL here */
            //webSocket: /* optional: false if you want to use polling GET to receive messages. Defaults to true (use WebSocket). */,
            //pollingInterval: /* optional: set polling interval in milliseconds. Default to 1000 */,
          }

          directLine = new DirectLine(config);
          postActivity();
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
              _id: 1,
              text: `Hello developer, Token ExpiresIn = ${expiresIn} ${'\n'} conversation Id = ${conversationId}`,
              createdAt: new Date(),
              user: {
                _id: 2,
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


const postActivity = ()=>{
console.log('post activity called')
directLine.postActivity({
  from: { id: 'myUserId', name: 'myUserName' }, // required (from.name is optional)
  type: 'message',
  text: 'Hey Bot!'
}).subscribe(
  (  id: any) => console.log("Posted activity, assigned ID ", id),
  (  error: any) => console.log("Error posting activity", error)
);
directLine.activity$
.subscribe(
  (    activity: any) => console.log("received activity ", activity)
);
}