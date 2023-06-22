import { Text, View, StyleSheet,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeButton from "../components/ui/HomeButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function HomeScreen(){
    const navigation = useNavigation();

    function learnEnglishHandler(){
        navigation.navigate("EnglishScreen");
    }
    function learnUrduHandler(){
        navigation.navigate("UrduScreen");
    }
    function learnMathsHandler(){
        navigation.navigate("MathsScreen");
    }
    function learnArtHandler(){
        navigation.navigate("ArtScreen");
    }
    function rhymesHandler(){
        navigation.navigate("RhymesScreen");
    }
    function ViewRecordsHandler(){
        navigation.navigate("ViewRecordsScreen");
    }

    return <View style = {styles.ViewConatiner} >
        
        <Title>Home screen</Title>
        <ScrollView>
        <HomeButton imageUri={require('../assets/images/Icons/abc.png')} onPress={learnEnglishHandler}>Learn English</HomeButton>
        <HomeButton imageUri={require('../assets/images/Icons/urduAlphabet.png')} onPress={learnUrduHandler}>Learn Urdu</HomeButton>
        <HomeButton imageUri={require('../assets/images/Icons/123.png')} onPress={learnMathsHandler}>Learn Maths</HomeButton>
        <HomeButton imageUri={require('../assets/images//Icons/coloring.png')} onPress={learnArtHandler}>Learn Art</HomeButton>
        <HomeButton imageUri={require('../assets/images/Icons/rhymes.png')} onPress={rhymesHandler}>Rhymes</HomeButton>
        <HomeButton imageUri={require('../assets/images/Icons/viewRecords.png')} onPress={ViewRecordsHandler}>View Records</HomeButton>
        </ScrollView>
    </View>
    
}
export default HomeScreen;

const styles = StyleSheet.create({
    ViewConatiner: {
        flex: 1,
        padding: 8,
        backgroundColor: Colors.primary
    }
})