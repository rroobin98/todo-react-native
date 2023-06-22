import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from "react-native";

let count = 1;

export default function Add({ navigation }) {
  const [text, setText] = React.useState("");
  const [description, setDescription] = React.useState([]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder="Title..."
      />

      <TextInput
        style={styles.descriptionInput}
        value={description}
        onChangeText={(description) => setDescription(description)}
        placeholder="Description..."
      />

      <Button
        onPress={() => {
          const todo = {
            description,
            text,
            id: Date.now(),
          };
          console.log("todo", todo);

          navigation.navigate("Home", { todo });
        }}
        title="Add"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8FBC8F",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
    width: 200,
  },
  descriptionInput: {
    height: 90,
    width: 200,
    borderWidth: 1,
    paddingLeft: 10,
  },
});
