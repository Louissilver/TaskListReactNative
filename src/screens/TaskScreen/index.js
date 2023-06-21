import React from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";

const tasks = [
  { id: 1, title: "Comprar leite" },
  { id: 2, title: "Lavar roupa" },
  { id: 3, title: "Passear com o cachorro" },
];

function TaskScreen({ route, navigation }) {
  const { parameter } = route.params;

  const handlenavigate = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Aqui está sua lista de tarefas: {parameter}
      </Text>
      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
      />
      <Button title="Voltar" onPress={handlenavigate} />
    </View>
  );
}

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    width: "100%",
  },
});
