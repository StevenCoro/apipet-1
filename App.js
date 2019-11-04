import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class App extends React.Component {
  state = {
    texto: ""
  };
  saludar = () => this.setState({ texto: "Hola, ¿cómo estás?" });
  despedirse = () => this.setState({ texto: "¡Nos vemos!" });

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.texto}</Text>
        <Button onPress={this.saludar} title="Saludar" />
        <Button onPress={this.despedirse} title="Despedirse" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});


