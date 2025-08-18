import {Button, Text, View, StyleSheet, Image} from "react-native";
import React, {useState} from "react";
import CardPerfil from "./components/CardPerfil";

export default function App() {
  return (
      <View style={styles.container}>
        <CardPerfil
            imagem="https://i.pinimg.com/736x/63/22/87/632287e0846f60c5d78bbb6ab29dea9c.jpg"
            nome="Se-mi"
            descricao="Personagem número 380, participante do Squid Game."
        />
      </View>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})