import {Text, View, StyleSheet, Image} from "react-native";
import React from "react";

export default function Titulo({imagem, nome, descricao}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: imagem}} />
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    descricao: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center'
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20
    },
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})