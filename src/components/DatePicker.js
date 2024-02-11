import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HandleDatePicker from "../components/HandleDatePicker";

const DAYS = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

const DatePicker = ({ date, setDate }) => {
  const toggleDatePicker = () => {
    setDatePickerVisibility((isVisible) => !isVisible);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dayArabic = DAYS[date.getDay()];

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          toggleDatePicker();
        }}
        style={[styles.buttonContainer]}
      >
        <Text style={styles.dateText}>
          {dayArabic} - {date.toLocaleDateString()}
        </Text>
        <AntDesign style={styles.arrow} name="down" size={20} color="black" />
      </TouchableOpacity>

      <HandleDatePicker
        visibility={isDatePickerVisible}
        visibilitySetter={toggleDatePicker}
        dateSetter={setDate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  dateText: {
    fontSize: 27,
    fontWeight: "bold",
    marginRight: 5,
    marginBottom: 5,
    marginTop: 10,
    color: "#451A00",
  },
  arrow: {
    marginTop: 15,
  },
});

export default DatePicker;
