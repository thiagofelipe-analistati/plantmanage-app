import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, TextInput, KeyboardAvoidingView, Platform} from "react-native";
import wateringImg from '../assets/watering.png'
import colors from "../styles/colors";
import {Feather} from '@expo/vector-icons'
import { Button } from "../components/button";

export function UserIdentification(){
    const[isFocused, setIsFocused] = useState(false)
    function handleimputBlur(){
        setIsFocused(false)
    }
    function handleImputFocus(){
        setIsFocused(true)
    }
    return(
        <SafeAreaView style={styles.contanaier}>
            <KeyboardAvoidingView  
                style={styles.contanaier}
                behavior={Platform.OS === 'ios'? 'padding': 'height'}
            > 
                <View style={styles.content}> 
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}> 
                            😄 
                            </Text>
                            <Text style={styles.title}> Como podemos{'\n'} chamar você?</Text>
                        </View> 
                        <TextInput
                            style={[
                                styles.imputText,
                                isFocused && {borderColor:colors.green}
                            ]}
                            placeholder="Digite o seu nome" 
                            onBlur={handleimputBlur}
                            onFocus={handleImputFocus}
                        />
                        <View style={styles.footer}> 
                            <Button title="Confirmar" />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanaier:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-around',
        width: '100%'
    },
    content: {
        flex:1,
        width: '100%'
    },
    form:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        paddingHorizontal: 54,
    },
    header:{
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    imputText: {
        borderBottomWidth: 1,
        borderColor: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title:{
        fontSize: 24 ,
        color: colors.heading,
        textAlign: 'center',
        lineHeight: 32,
        marginTop: 20
    },
    footer:{
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})