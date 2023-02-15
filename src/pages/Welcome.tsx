import React, {useState}from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from "react-native";
import wateringImg from '../assets/watering.png'
import colors from "../styles/colors";
import {Feather} from '@expo/vector-icons'

export  function Welcome(){
 
    return(
        <SafeAreaView style={styles.contanaier}>
            <Text style={styles.title}> Gerencie {'\n'}suas plantas {'\n'}de forma fácil</Text>
            <Image source={wateringImg} style={styles.image} resizeMode="contain" />
            <Text style={styles.subtitle}> Não esqueça mais de regar suas plantas, Nós cuidamos de lembrar voce sempre que precisar.</Text>
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}
            >
                <Feather  style={styles.buttontext} name="chevron-right" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanaier:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around'
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        paddingHorizontal: 20

    },
    image: {
        height: Dimensions.get('window').width*0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttontext: {
        color: colors.white,
        fontSize: 24,
    }
})