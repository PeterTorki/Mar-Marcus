import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HandleDatePicker from "../components/HandleDatePicker";
import { DateAndDataContext } from "../Context/DateAndData";

const DatePicker = ({ date, setDate }) => {
  const days = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dayArabic = days[date.getDay()];

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setDatePickerVisibility(
            (isDatePickerVisible) => !isDatePickerVisible
          );
        }}
        style={styles.buttonContainer}
      >
        <Text style={styles.dateText}>
          {dayArabic} - {date.toLocaleDateString()}
        </Text>
        <AntDesign style={styles.arrow} name="down" size={20} color="black" />
      </TouchableOpacity>

      <HandleDatePicker
        visibility={isDatePickerVisible}
        visibilitySetter={setDatePickerVisibility}
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
    color: "#451A00",
  },
  arrow: {
    marginTop: 5,
  },
});

export default DatePicker;
