import { View, Text, StyleSheet, Button } from "react-native";


import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";
import IconButton from "../../components/ui/IconButton";

function EnglishScreen({navigation}) {

  function englishAlphabetsHandler() {
    navigation.navigate("EnglishAlphabetsScreen");
  }
  function englishPhonicsHandler() {
    navigation.navigate("EnglishPhonicsScreen");
  }
  function englishSpellingsHandler() {
    navigation.navigate("EnglishSpellingsScreen");
  }
  function englishTracingHandler() {
    navigation.navigate("EnglishTracingScreen");
  }
  function englishMatchMakingHandler() {
    navigation.navigate("EnglishMatchmakingScreen");
  }
  function englishTouchAlphabetHandler() {
    navigation.navigate("EnglishTouchAlphabetScreen");
  }

  return (
    <View style={styles.ViewConatiner}>
      
      <Title>Learn English</Title>
      <HomeButton
        imageUri={require("../../assets/images/Icons//abc.png")}
        onPress={englishAlphabetsHandler}
      >
        Alphabets
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/phonics.png")}
        onPress={englishPhonicsHandler}
      >
        Phonics
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/spellings.png")}
        onPress={englishSpellingsHandler}
      >
        Spellings
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/tracing.png")}
        onPress={englishTracingHandler}
      >
        Tracing
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/matchmaking.png")}
        onPress={englishMatchMakingHandler}
      >
        Matchmaking
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/touch.png")}
        onPress={englishTouchAlphabetHandler}
      >
        Touch alphabet
      </HomeButton>
    </View>
  );
}
export default EnglishScreen;

const styles = StyleSheet.create({
  ViewConatiner: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary,
  },
});
