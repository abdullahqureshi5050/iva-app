import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import moment from 'moment';

type timePeriodProps = {
    startDate: string,
    endDate: string,
}
const timePeriodHandler = (startDate: string, endDate: string) =>{
   
    var date1: any = moment(startDate); 
    //'2022/02/15 13:00'
    var date2: any = moment(endDate);
    var netMinutes = date2.diff(date1, 'minutes'); // milliseconds between date1 & date2
    var netDays = date2.diff(date1, 'days'); // milliseconds between date1 & date2
    
   // console.log(`net days ${netDays+1} ${startDate} - ${endDate}`);
    //alert(diffDays + " days, " + diffHrs + " hours, " + diffMins );
    
    //include last day + 1
    return netDays + 1;
    //return netMinutes;

}

export const TimePeriodCalculator = (props: timePeriodProps) => {
    const { startDate, endDate } = props;
    const res = timePeriodHandler(startDate, endDate);
  return (
    res
    // <View>
    //       <Text>{res}</Text>
    //    {/* <Button title='Btn' onPress={timePeriodHandler}></Button> */}
    // </View>
  )
}

export default TimePeriodCalculator

const styles = StyleSheet.create({})