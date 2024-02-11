import React, { useState, useContext, useEffect } from "react";
import { customAlphabet } from "nanoid/non-secure";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { DateAndDataContext } from "../Context/DateAndData";
import DatePicker from "../components/DatePicker";
import InputContainer from "../components/InputContainer";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

const HomeScreen = () => {

  const { dateAndData, setDateAndData } = useContext(DateAndDataContext);

  const [date, setDate] = useState(new Date());

  const defaultData = {
    id: nanoid(),
    date: date.toLocaleDateString(),
    eveBible: "",
    earlyBible: "",
    pauline: "",
    catholic: "",
    apraxis: "",
    bible: "",
    deacon1: "",
    deacon2: "",
    deacon3: "",
    deacon4: "",
    deacon5: "",
  };

  const [dataObject, setDataObject] = useState(defaultData);

  const resetDate = (date) => {
    setDate(date);
    setDataObject(defaultData);
  };

  // useEffect(() => {
  //   getData();
  // }, [dateAndData]);

  useEffect(() => {
    const dateIndex = dateAndData.findIndex(
      (item) => item.date === date.toLocaleDateString()
    );
    if (dateIndex !== -1) {
      setDataObject(dateAndData[dateIndex]);
    } else {
      setDataObject(defaultData);
    }
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("dateAndData", JSON.stringify(dateAndData));
      } catch (err) {
        console.log(err);
      }
    };
    saveData();
  }, [date]);

  useEffect(() => {
    const dateIndex = dateAndData.findIndex(
      (item) => item.date === date.toLocaleDateString()
    );
    if (dateIndex !== -1) {
      const newData = [...dateAndData];
      newData[dateIndex] = dataObject;
      setDateAndData(newData);
    } else {
      setDateAndData([...dateAndData, dataObject]);
    }
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("dateAndData", JSON.stringify(dateAndData));
      } catch (err) {
        console.log(err);
      }
    };
    // saveData();
  }, [dataObject]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("dateAndData");
      console.log("Hi:::", value);
      if (value !== null) {
        console.log("Hi:", value);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const handleInputChange = (input, value) => {
    setDataObject({ ...dataObject, [input]: value }); 
  };

  return (
    <ImageBackground
      source={require("../../assets/marc3.jpeg")}
      resizeMode="cover"
      style={styles.image}
      blurRadius={4}
      opacity={0.85}
    >
      <ScrollView style={styles.container}>
        <DatePicker date={date} setDate={resetDate} />

        <Text style={styles.sectionTitle}>القراءات</Text>

        <InputContainer
          title={"إنجيل عشية"}
          value=""/*{dataObject.eveBible}*/
          // handler={handleInputChange}
          name="eveBible"
        />

        <InputContainer
          title={"إنجيل باكر"}
          value=""/*{dataObject.earlyBible}*/
          // handler={handleInputChange}
          name="earlyBible"
        />
        <InputContainer
          title={"البولس"}
          value=""/*{dataObject.pauline}*/
          // handler={handleInputChange}
          name="pauline"
        />
        <InputContainer
          title={"الكاثوليكون"}
          value=""/*{dataObject.catholic}*/
          // handler={handleInputChange}
          name="catholic"
        />
        <InputContainer
          title={"الأبركسيس"}
          value=""/*{dataObject.apraxis}*/
          // handler={handleInputChange}
          name="apraxis"
        />
        <InputContainer
          title={"الإنجيل"}
          value=""/*{dataObject.bible}*/
          // handler={handleInputChange}
          name="bible"
        />

        <Text style={styles.sectionTitle}>خدمة المذبح</Text>

        <View style={styles.sectionTwo}>
          <TextInput
            style={styles.inputText}
            placeholder="شماس 1"
            value=""/*{dataObject.deacon1}*/
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 2"
            value=""/*{dataObject.deacon2}*/
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 3"
            value=""/*{dataObject.deacon3}*/
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 4"
            value=""/*{dataObject.deacon4}*/
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 5"
            value=""/*{dataObject.deacon5}*/
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    borderBottomWidth: 2,
    textAlign: "center",
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
  sectionTwo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});

export default HomeScreen;
