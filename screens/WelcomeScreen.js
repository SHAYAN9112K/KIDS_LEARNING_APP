import { Text, View, Image, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from "react";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useNavigation } from "@react-navigation/native";

function WelcomeScreen({navigation}){


    useEffect (() => {
        setTimeout(function(){
            navigation.replace('Home')
        }, 3000)
    });

    return <View style = {styles.rootContainer}>
    <View style = {styles.imageContainer}>
    <Image style= {styles.image} source={require('../assets/KLlogo.png')}/>
    </View>
    <Text style = {styles.summaryText}>Welcome to Kids learning. </Text>
    {/* <PrimaryButton onPress={startAppHandler} >Let's go!  <FontAwesome name="long-arrow-right" size={32} color="white" /> </PrimaryButton> */}
</View>
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },
    imageContainer: {
        width: 400,
        height: 300, //400
        marginBottom: 250,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 24,
        color: Colors.color2 //'white'
    },

})