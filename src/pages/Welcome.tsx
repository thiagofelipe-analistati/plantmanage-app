import React, {useState}from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from "react-native";
import wateringImg from '../assets/watering.png'
import colors from "../styles/colors";
import {Feather} from '@expo/vector-icons'

export  function Welcome(){
 
    return(
        <SafeAreaView style={styles.contanaier}>
            <View style={styles.wrapper}> 
                <Text style={styles.title}> Gerencie {'\n'}suas plantas de {'\n'} forma fácil</Text>
                <Image source={wateringImg} style={styles.image} resizeMode="contain" />
                <Text style={styles.subtitle}> Não esqueça mais de regar suas {'\n'} plantas,
                 Nós cuidamos de lembrar você {'\n'} sempre que precisar.</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    activeOpacity={0.7}
                >
                    <Feather  style={styles.buttontext} name="chevron-right" />
                </TouchableOpacity>
            </View>
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
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 34
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
    },
    wrapper:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20
    }
})