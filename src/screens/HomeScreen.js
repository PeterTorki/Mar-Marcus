import React, { useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customAlphabet } from "nanoid/non-secure";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { DateAndDataProvider } from "../Context/DateAndData";
import { DateAndDataContext } from "../Context/DateAndData";
import DatePicker from "../components/DatePicker";
import InputContainer from "../components/InputContainer";

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

  const save = async () => {
    try {
      await AsyncStorage.setItem("dateAndData", JSON.stringify(dateAndData));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const dateIndex = dateAndData.findIndex(
      (item) => item.date === date.toLocaleDateString()
    );
    if (dateIndex !== -1) {
      setDataObject(dateAndData[dateIndex]);
    } else {
      setDataObject(defaultData);
    }
    if (dateAndData.length !== 0) {
      save();
    }
  }, [date, dateAndData]);

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
    if (dateAndData.length !== 0) {
      save();
    }
    // Error is here
  }, [dataObject]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       let data = await AsyncStorage.getItem("dateAndData");
  //       if (data !== null) {
  //         console.log("7mama", data);
  //       }
  //     } catch (err) {
  //       alert(err);
  //     }
  //   }
  //   getData();
  // }, [dateAndData]);

  const handleInputChange = (input, value) => {
    setDataObject({ ...dataObject, [input]: value });
  };

  return (
    <ImageBackground
      source={require("../../assets/marc3.jpeg")}
      style={styles.image}
      opacity={0.8}
      blurRadius={3}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <DatePicker date={date} setDate={resetDate} />
        <Text style={styles.sectionTitle}>القراءات</Text>

        <InputContainer
          title={"إنجيل عشية"}
          value={dataObject.eveBible}
          handler={handleInputChange}
          name="eveBible"
        />

        <InputContainer
          title={"إنجيل باكر"}
          value={dataObject.earlyBible}
          handler={handleInputChange}
          name="earlyBible"
        />
        <InputContainer
          title={"البولس"}
          value={dataObject.pauline}
          handler={handleInputChange}
          name="pauline"
        />
        <InputContainer
          title={"الكاثوليكون"}
          value={dataObject.catholic}
          handler={handleInputChange}
          name="catholic"
        />
        <InputContainer
          title={"الأبركسيس"}
          value={dataObject.apraxis}
          handler={handleInputChange}
          name="apraxis"
        />
        <InputContainer
          title={"الإنجيل"}
          value={dataObject.bible}
          handler={handleInputChange}
          name="bible"
        />

        <Text style={styles.sectionTitle}>خدمة المذبح</Text>

        <View style={styles.sectionTwo}>
          <InputContainer
            title={"شماس 1"}
            value={dataObject.deacon1}
            handler={handleInputChange}
            name="deacon1"
          />
          <InputContainer
            title={"شماس 2"}
            value={dataObject.deacon2}
            handler={handleInputChange}
            name="deacon2"
          />
          <InputContainer
            title={"شماس 3"}
            value={dataObject.deacon3}
            handler={handleInputChange}
            name="deacon3"
          />
          <InputContainer
            title={"شماس 4"}
            value={dataObject.deacon4}
            handler={handleInputChange}
            name="deacon4"
          />
          <InputContainer
            title={"شماس 5"}
            value={dataObject.deacon5}
            handler={handleInputChange}
            name="deacon5"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    height: Dimensions.get("window").height,
  },
  image: {
    opacity: 0.8,
    flex: 1,
    maxHeight: Dimensions.get("window").height,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginBottom: 5,
    borderBottomWidth: 2,
    textAlign: "center",
  },
  inputTitle: {
    fontSize: 15,
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
    marginVertical: 10,
  },
});

export default HomeScreen;
