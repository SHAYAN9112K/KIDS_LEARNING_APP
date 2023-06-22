import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; //for navigayion


import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";

function UrduScreen({navigation}){

    function urduAlphabetsHandler(){
        navigation.navigate("UrduAlphabetsScreen");
    }
    function urduPhonicsHandler(){
        navigation.navigate("UrduPhonicsScreen");
    }
    function urduSpellingsHandler(){
        navigation.navigate("UrduSpellingsScreen");
    }
    function urduTracingHandler(){
        navigation.navigate("UrduTracingScreen");
    }
    function urduMatchMakingHandler(){
        navigation.navigate("UrduMatchmakingScreen");
    }
    function urduTouchAlphabetHandler(){
        navigation.navigate("UrduTouchAlphabetScreen");
    }

  
  
    return <View style = {styles.ViewConatiner} >
    
    <Text> </Text>
    <Title>Learn Urdu</Title>
    <HomeButton imageUri={require('../../assets/images/Icons/urduAlphabet.png')} onPress={urduAlphabetsHandler}>Alphabets</HomeButton>
    <HomeButton imageUri={require('../../assets/images/Icons/phonics.png')} onPress={urduPhonicsHandler}>Phonics</HomeButton>
    <HomeButton imageUri={require('../../assets/images/Icons/spellings.png')} onPress={urduSpellingsHandler}>Spellings</HomeButton>
    <HomeButton imageUri={require('../../assets/images/Icons/tracing.png')} onPress={urduTracingHandler}>Tracing</HomeButton>
    <HomeButton imageUri={require('../../assets/images/Icons/matchmaking.png')} onPress={urduMatchMakingHandler}>Matchmaking</HomeButton>
    <HomeButton imageUri={require('../../assets/images/Icons/touch.png')} onPress={urduTouchAlphabetHandler}>Touch alphabet</HomeButton>
</View>
}
export default UrduScreen;

const styles = StyleSheet.create({
    ViewConatiner: {
        flex: 1,
        padding: 8,
        backgroundColor: Colors.primary
    }
})


