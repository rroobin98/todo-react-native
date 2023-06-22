import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home.jsx";
import Add from "./Screens/Add.jsx";
import Detail from "./Screens/Detail.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerRight: () => <Button title="Add" />,
          })}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={({ navigation }) => ({
            title: "New Todo",
          })}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ navigation }) => ({
            title: "Details",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8FBC8F",
    justifyContent: "center",
  },
});
