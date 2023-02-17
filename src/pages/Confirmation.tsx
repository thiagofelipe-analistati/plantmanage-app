import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import colors from "../styles/colors";


export function Confirmation (){
    return(
        <SafeAreaView style={styles.contanaier}>
            <View style={styles.content} >
                <Text style={styles.emoji}>
                😄 
                </Text>
                <Text style={styles.title}>
                    Prontinho
                </Text>
                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas platinhas com cuidado
                </Text>
                <View style={styles.footer}> 
                     <Button title="Confirmar" />
                </View>
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
    content: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       width: '100%',
       padding: 30
    },
    emoji: {
        fontSize: 78
    },
    title:{
        fontSize: 22 ,
        color: colors.heading,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 15
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 10,
        color: colors.heading
    },
    footer:{
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
})