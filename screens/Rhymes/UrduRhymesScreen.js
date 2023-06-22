import { View, Text, StyleSheet, Button } from "react-native";

import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";
import IconButton from "../../components/ui/IconButton";

function UrduRhymesScreen({navigation}) {

  function urduRhymeOneHandler() {
    navigation.navigate("UrduRhymeOne");
  }
  function urduRhymeTwoHandler() {
    navigation.navigate("UrduRhymeTwo");
  }
    function urduRhymeThreeHandler() {
        navigation.navigate("UrduRhymeThree");
    }
    function urduRhymeFourHandler() {
        navigation.navigate("UrduRhymeFour");
    }
    function urduRhymeFiveHandler() {
        navigation.navigate("UrduRhymeFive");
    }
    function urduRhymeSixHandler() {
        navigation.navigate("UrduRhymeSix");
    }


  return (
    <View style={styles.ViewConatiner}>
      
      <Title>Urdu Rhymes</Title>

      <HomeButton
        imageUri={require("../../assets/images/Icons//rhymes.png")}
        onPress={urduRhymeOneHandler
        }
      >
        Urdu Alphabets
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={urduRhymeTwoHandler}
      >
        Bul bul ka baccha
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={urduRhymeThreeHandler}
      >
        School chalo
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={urduRhymeFourHandler}
      >
        Chuck Chuk
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={urduRhymeFiveHandler}
      >
        Chutti  si munni
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/rhymes.png")}
        onPress={urduRhymeSixHandler}
      >
        Ek mota hathi
      </HomeButton>
    </View>
  );
}
export default UrduRhymesScreen;

const styles = StyleSheet.create({
  ViewConatiner: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary,
  },
});
