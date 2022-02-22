import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

export const startapi = (props: any) => {
    const { dateAtIndex } = props;
  axios
    .post(
      "https://iva-api-management.azure-api.net/iva/v1/datareplay",
      {
        replay_request: {
          userID: "1234567890",
          command: "START",
          val: dateAtIndex, //"19 Jan 2022 16:05:50 GMT" //fD //
        },
      },
      {
        headers: {
          "Ocp-Apim-Subscription-Key": "8e522f5dd33b4892b2a8e149d504b153",
          "Ocp-Apim-Trace": true,
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
