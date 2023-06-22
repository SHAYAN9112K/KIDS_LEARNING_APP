// import { View, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity } from "react-native";
// import PlayRhyme from "../../components/PlayRhyme";

// function EnglishRhymesScreen(){
//     //return <PlayRhyme />
//     // function videoHandler(){
//     //     return <PlayRhyme/>
//     // }
//     // return <View>
//     //     <Text>English Rhymes Screen</Text>
        
//     //     <Pressable onPress={videoHandler}><View><Text>ABC Rhyme</Text></View></Pressable>
        
//     // </View>
    
// }
// export default EnglishRhymesScreen;

import { View, Text, StyleSheet, Button ,ScrollView} from "react-native";


import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";
import IconButton from "../../components/ui/IconButton";

function EnglishRhymesScreen({navigation}) {

  function englishRhymeOneHandler() {
    navigation.navigate("EnglishRhymeOne");
  }
  function englishRhymeTwoHandler() {
    navigation.navigate("EnglishRhymeTwo");
  }
    function englishRhymeThreeHandler() {
        navigation.navigate("EnglishRhymeThree");
    }
    function englishRhymeFourHandler() {
        navigation.navigate("EnglishRhymeFour");
    }
    function englishRhymeFiveHandler() {
        navigation.navigate("EnglishRhymeFive");
    }
    function englishRhymeSixHandler() {
        navigation.navigate("EnglishRhymeSix");
    }


  return (
    
    <View style={styles.ViewConatiner}>
      
      <Title>English Rhymes</Title>
      <ScrollView>
      <HomeButton
        imageUri={require("../../assets/images/Icons//rhymes.png")}
        onPress={englishRhymeOneHandler
        }
      >
        ABC Song
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={englishRhymeTwoHandler}
      >
        Black Sheep
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={englishRhymeThreeHandler}
      >
        Jhony Jhony
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={englishRhymeFourHandler}
      >
        Wheels on the bus
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={englishRhymeFiveHandler}
      >
        Baby shark
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={englishRhymeSixHandler}
      >
        Twinkle twinkle
      </HomeButton>
      </ScrollView>
    </View>
    
  );
}
export default EnglishRhymesScreen;

const styles = StyleSheet.create({
  ViewConatiner: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary,
  },
});
