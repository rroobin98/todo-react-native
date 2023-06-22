import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Detail({ navigation, route }) {
  const { title, description, id, setTodos, todos } = route.params;
  const [currentDate, setCurrentDate] = useState("");

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== id) return true;
      })
    );
    navigation.navigate("Home");
  };

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [route]);

  useEffect(() => {
    const date = new Date(id);
    let day = date.getDate(); //Current Date
    let month = date.getMonth() + 1; //Current Month
    let year = date.getFullYear(); //Current Year
    setCurrentDate(day + "/" + month + "/" + year + " ");
  }, []);

  return (
    <View>
      <Text style={{ paddingTop: 30, paddingBottom: 30 }}>{description}</Text>
      <Button title="Delete" onPress={() => deleteTodo(id)} />

      <Text style={{ paddingTop: 30 }}>{currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  DetailButton: {
    color: "red",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
