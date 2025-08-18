import {Text, View, StyleSheet} from "react-native";
import React from "react";

export default function Titulo({titulo}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})