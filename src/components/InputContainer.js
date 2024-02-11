import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { I18nManager } from "react-native";

import { DateAndDataContext } from "../Context/DateAndData";

const InputContainer = ({ title, value, handler, name }) => {
  const isRTL = I18nManager.isRTL;

  const { dateAndData } = React.useContext(DateAndDataContext);

  const [readerCount, setReaderCount] = React.useState(0);

  const count = () => {
    let count = 0;
    dateAndData.forEach((item) => {
      console.log("Items Data", item);

      const objectValues = Object.values(item);
      if (objectValues?.includes(value) && value !== "") {
        count++;
      }
      console.log("Reader Cont", count);
      setReaderCount(count);
    });
  };

  React.useEffect(() => {
    count();
  }, [dateAndData]);

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          { flexDirection: isRTL ? "row" : "row-reverse" },
        ]}
      >
        {name.substring(0, name.length - 1) !== "deacon" && (
          <Text style={[styles.inputTitle, { width: 150 }]}>{title}</Text>
        )}
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "#451A00",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {readerCount}
          </Text>
        </View>

        <TextInput
          style={styles.inputText}
          value={value}
          onChangeText={(reader) => handler(name, reader)}
        />
      </View>
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
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
  },
  inputText: {
    width: 150,
    height: 35,
    borderRadius: 5,
    borderColor: "#451A00",
    borderWidth: 2.4,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    paddingHorizontal: 10,
  },
});

export default InputContainer;
