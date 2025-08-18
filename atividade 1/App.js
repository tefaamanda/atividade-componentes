import {Button, Text, View, StyleSheet} from "react-native";
import React, {useState} from "react";
import Titulo from "./components/Titulo";

export default function App() {
  return (
      <View style={styles.container}>
        <Titulo titulo="Bem-vindo(a) a minha atividade 1!"/>
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