import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { DateAndDataProvider } from "./src/Context/DateAndData";
import HomeScreen from "./src/screens/HomeScreen";
import { ScrollView } from "react-native-gesture-handler";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="كنيسة مارمرقس"
        component={HomeScreen}
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
            height: 65,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
});

export default App = () => {
  return (
    <DateAndDataProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </DateAndDataProvider>
  );
};
