import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  const name = "Luís";
  const handleNavigate = () => {
    navigation.navigate("Task", { parameter: name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à lista de tarefas, {name}!</Text>
      <Button title="Ver tarefas" onPress={handleNavigate} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
