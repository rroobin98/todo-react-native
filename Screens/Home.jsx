import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";

export default function Home({ navigation, route }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (route.params?.todo) {
      console.log("params.todo", route.params?.todo);
      setTodos((prev) => [...prev, route.params?.todo]);
    }
  }, [route.params?.todo]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          style={tw`text-white`}
          onPress={() => navigation.navigate("Add")}
          title="Add"
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ paddingTop: 30, paddingBottom: 20 }}>
                {item.text}
              </Text>
              <Button
                style={[styles.DetailButton, styles.container]}
                title="Detail"
                onPress={() =>
                  navigation.navigate("Detail", {
                    title: item.text,
                    id: item.id,
                    description: item.description,
                    todos: todos,
                    setTodos: setTodos,
                  })
                }
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  DetailButton: {
    backgroundColor: "#5F9EA0",
    fontSize: 20,
    width: 70,
    height: 30,
    borderRadius: 5,
    color: "black",
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    padding: 10,
    justifyContent: "center",
  },
});
