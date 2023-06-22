import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; //for navigayion

import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";

function RhymesScreen({navigation}){

    function englishRhymesHandler(){
        navigation.navigate("EnglishRhymesScreen");
    }
    function urduRhymesHandler(){
        navigation.navigate("UrduRhymesScreen");
    }
    
    return <View style = {styles.ViewConatiner} >
    <Text> </Text>
    <Title>Rhymes</Title>
    <HomeButton imageUri={require('../../assets/images/Icons/abc.png')} onPress={englishRhymesHandler}>English Rhymes</HomeButton>
    <HomeButton imageUri={require('../../assets/images/Icons/urduAlphabet.png')} onPress={urduRhymesHandler}>Urdu Rhymes</HomeButton>
</View>
}
export default RhymesScreen;

const styles = StyleSheet.create({
    ViewConatiner: {
        flex: 1,
        padding: 8,
        backgroundColor: Colors.primary
    }
})


