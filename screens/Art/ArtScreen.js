import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

import HomeButton from "../../components/ui/HomeButton";
import Title from "../../components/ui/Title";
import Colors from "../../constants/Colors";
import IconButton from "../../components/ui/IconButton";

function ArtScreen({navigation}) {

  function shapesHandler() {
    navigation.navigate("ShapesScreen");
  }
  function colorsHandler() {
    navigation.navigate("ColorsScreen");
  }
  function tracingHandler() {
    navigation.navigate("ShapesTracingScreen");
  }
  function matchmakingHandler() {
    navigation.navigate("ShapesMatchmakingScreen");
  }
  function touchColorHandler() {
    navigation.navigate("TouchColorScreen");
  }
  function drawingHandler() {
    navigation.navigate("DrawingScreen");
  }
  function coloringHandler() {
    navigation.navigate("ColoringScreen");
  }

  return (
    <View style={styles.ViewConatiner}>
      
      <Title>Learn Art</Title>
      <HomeButton
        imageUri={require("../../assets/images/Icons/Shapes.png")}
        onPress={shapesHandler}
      >
        Shapes
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/colors.png")}
        onPress={colorsHandler}
      >
        Colors
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/tracing.png")}
        onPress={tracingHandler}
      >
        Tracing
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/matchmaking.png")}
        onPress={matchmakingHandler}
      >
        Matchmaking
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/touch.png")}
        onPress={touchColorHandler}
      >
        Touch Color
      </HomeButton>
      <HomeButton
        imageUri={require("../../assets/images/Icons/drawing.png")}
        onPress={drawingHandler}
      >
        Drawing
      </HomeButton>

      <HomeButton
        imageUri={require("../../assets/images/Icons/coloring.png")}
        onPress={coloringHandler}
      >
        Coloring
      </HomeButton>
    </View>
  );
}
export default ArtScreen;

const styles = StyleSheet.create({
  ViewConatiner: {
    flex: 1,
    padding: 8,
    backgroundColor: Colors.primary,
  },
});
