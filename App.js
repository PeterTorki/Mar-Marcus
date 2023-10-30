import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { DateAndDataProvider } from "./src/Context/DateAndData";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  // store the name of today in arabic in variable

  return (
    <DateAndDataProvider>
      <Stack.Navigator
        screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Peter"
          options={{
            // in need to make title of 2 lines
            headerTitle: () => {
              return (
                <View>
                  <Text style={styles.title}>كنيسة مارمرقس</Text>
                </View>
              );
            },
            headerStyle: {
              backgroundColor: "#A1785f",
            },
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </DateAndDataProvider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
});

export default App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
