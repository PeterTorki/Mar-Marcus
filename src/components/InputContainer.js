import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const InputContainer = ({ title ,value, handler, name }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={(reader) => handler(name, reader)}
      />
      <Text style={styles.inputTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  inputTitle: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  inputText: {
    width: 160,
    height: 40,
    borderRadius: 5,
    borderColor: "#451A00",
    borderWidth: 2.4,
    padding: 10,
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});

export default InputContainer;
