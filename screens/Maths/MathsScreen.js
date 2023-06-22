import { View, Text, StyleSheet, Button } from "react-native";


import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";
import IconButton from "../../components/ui/IconButton";


function MatchScreen({navigation}) {

  function numbersHandler() {
    navigation.navigate("NumbersScreen");
  }
  function additionHandler() {
    navigation.navigate("AdditionScreen");
  }
  function subtractionHandler() {
    navigation.navigate("SubtractionScreen");
  }
  function numberTracingHandler() {
    navigation.navigate("NumberTracingScreen");
  }
  function numbersMatchMakingHandler() {
    navigation.navigate("NumbersMatchmakingScreen");
  }
  function touchNumberHandler() {
    navigation.navigate("TouchNumberScreen");
  }

  return (
    <View style={styles.ViewConatiner}>
      
      <Title>Learn Math</Title>
      <HomeButton
        imageUri={require("../../assets/images/Icons//123.png")}
        onPress={numbersHandler}
      >
        Numbers
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/addition.png")}
        onPress={additionHandler}
      >
        Addition
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/subtraction.png")}
        onPress={subtractionHandler}
      >
        Subtraction
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/tracing.png")}
        onPress={numberTracingHandler}
      >
        Tracing
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/matchmaking.png")}
        onPress={numbersMatchMakingHandler}
      >
        Matchmaking
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/touch.png")}
        onPress={touchNumberHandler}
      >
        Touch Number
      </HomeButton>
    </View>
  );
}
export default MatchScreen;

const styles = StyleSheet.create({
  ViewConatiner: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary,
  },
});
