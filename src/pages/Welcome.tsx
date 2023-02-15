import React, {useState}from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import wateringImg from '../assets/watering.png'
import { Button } from "../components/button";
import colors from "../styles/colors";

export  function Welcome(){

    const [visible, setVisible] = useState(false);
    function handleVisible(){
        setVisible(true)
    }   
    return(
        <SafeAreaView style={styles.contanaier}>
            <Text style={styles.title}> Gerencie {'\n'}suas plantas {'\n'}de forma fácil</Text>
            <Image source={wateringImg} style={styles.image} />
            <Text style={styles.subtitle}> Não esqueça mais de regar suas plantas, Nós cuidamos de lembrar voce sempre que precisar.</Text>
            <Button title="Avançar" onPress={handleVisible}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contanaier:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-between'
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
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image: {
        width: 292,
        height: 294
    },
    buttontext: {
        color: colors.white,
        fontSize: 24
    }
})