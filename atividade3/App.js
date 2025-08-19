import {Button, Text, View, StyleSheet, Alert, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import BotaoCustomizado from "./components/BotaoCustomizado";

export default function BotaoCustomizado({label, planoFundo}) {
  const handlePress = () => {
      Alert.alert("Você clicou no botão!");
  };
  
  return (
      <TouchableOpacity style={[styles.botao, { backgroundColor: planoFundo }]}
                        onPress={handlePress} >
        <BotaoCustomizado botao="Clique no botão"/>
      </TouchableOpacity>
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