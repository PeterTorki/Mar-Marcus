import React, { useState, useContext, useEffect } from "react";
import { nanoid } from "nanoid";

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

const HomeScreen = () => {
  const { dateAndData, setDateAndData } = useContext(DateAndDataContext);

  const [date, setDate] = useState(new Date());

  const [eveBible, setEveBible] = useState("");
  const [earlyBible, setEarlyBible] = useState("");
  const [pauline, setPauline] = useState("");
  const [catholic, setCatholic] = useState("");
  const [apraxis, setApraxis] = useState("");
  const [bible, setBible] = useState("");
  const [deacon1, setDeacon1] = useState("");
  const [deacon2, setDeacon2] = useState("");
  const [deacon3, setDeacon3] = useState("");
  const [deacon4, setDeacon4] = useState("");
  const [deacon5, setDeacon5] = useState("");

  const [dataObject, setDataObject] = useState({
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
  });

  const resetDate = (date) => {
    setDate(date);
    setEveBible("");
    setEarlyBible("");
    setPauline("");
    setCatholic("");
    setApraxis("");
    setBible("");
    setDeacon1("");
    setDeacon2("");
    setDeacon3("");
    setDeacon4("");
    setDeacon5("");
  };

  useEffect(() => {
    const findDateAndData = dateAndData.find(
      (item) => item.date === date.toLocaleDateString()
    );

    if (findDateAndData) {
      setEveBible(findDateAndData.eveBible);
      setEarlyBible(findDateAndData.earlyBible);
      setPauline(findDateAndData.pauline);
      setCatholic(findDateAndData.catholic);
      setApraxis(findDateAndData.apraxis);
      setBible(findDateAndData.bible);
    }
  }, [date]);

  useEffect(() => {
    console.log("Changed", date);
    console.log(dateAndData);

    setDateAndData((prev) => {
      const findDateAndData = prev.find(
        (item) => item.date === date.toLocaleDateString()
      );

      if (findDateAndData) {
        findDateAndData.eveBible = eveBible;
        findDateAndData.earlyBible = earlyBible;
        findDateAndData.pauline = pauline;
        findDateAndData.catholic = catholic;
        findDateAndData.apraxis = apraxis;
        findDateAndData.bible = bible;
      } else {
        prev.push({
          date: date.toLocaleDateString(),
          eveBible,
          earlyBible,
          pauline,
          catholic,
          apraxis,
          bible,
        });
      }

      return prev;
    });
  }, [eveBible, earlyBible, pauline, catholic, apraxis, bible, date]);

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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={eveBible}
            onChangeText={(name) => setEveBible(name)}
          />
          <Text style={styles.inputTitle}>إنجيل عشية</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={earlyBible}
            onChangeText={(name) => setEarlyBible(name)}
          />
          <Text style={styles.inputTitle}>إنجيل باكر</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={pauline}
            onChangeText={(name) => setPauline(name)}
          />
          <Text style={styles.inputTitle}>البولس </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={catholic}
            onChangeText={(name) => setCatholic(name)}
          />
          <Text style={styles.inputTitle}>الكاثوليكون</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={apraxis}
            onChangeText={(name) => setApraxis(name)}
          />
          <Text style={styles.inputTitle}>الأبركسيس</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            value={bible}
            onChangeText={(name) => setBible(name)}
          />
          <Text style={styles.inputTitle}>الإنجيل</Text>
        </View>

        <Text style={styles.sectionTitle}>خدمة المذبح</Text>

        <View style={styles.sectionTwo}>
          <TextInput
            style={styles.inputText}
            placeholder="شماس 1"
            value={deacon1}
            onChangeText={(name) => setDeacon1(name)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 2"
            value={deacon2}
            onChangeText={(name) => setDeacon2(name)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 3"
            value={deacon3}
            onChangeText={(name) => setDeacon3(name)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 4"
            value={deacon4}
            onChangeText={(name) => setDeacon4(name)}
          />
          <TextInput
            style={styles.inputText}
            placeholder="شماس 5"
            value={deacon5}
            onChangeText={(name) => setDeacon5(name)}
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
