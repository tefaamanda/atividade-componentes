import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

export default function BotaoCustomizado({label, planoFundo}) {
    return (
        <TouchableOpacity style={[styles.botao, { backgroundColor: planoFundo }]}
                          onPress={handlePress}>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'

    },

    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})