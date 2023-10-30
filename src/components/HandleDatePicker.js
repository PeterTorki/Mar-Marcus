import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const HandleDatePicker = ({ dateSetter, visibility, visibilitySetter }) => {
  
  const currentDate = (date = new Date()) => {
    return `${
      MONTH[date.getUTCMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleChosen = (date) => {
    dateSetter(date);
    visibilitySetter(!visibility);
  };

  return (
    <DateTimePickerModal
      isVisible={visibility}
      mode="date"
      display="inline"
      onConfirm={handleChosen}
      onCancel={() => visibilitySetter(!visibility)}
    />
  );
};

const styles = StyleSheet.create({});
export default HandleDatePicker;
