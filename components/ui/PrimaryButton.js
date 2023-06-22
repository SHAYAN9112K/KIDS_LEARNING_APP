import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {  //we can name it(onPress) anthing
                     
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        //style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#640233", opacity: 0.75 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderWidth: 2,
    borderColor: Colors.color2,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.color4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    //because we can not apply that to view or pressable
    color: "white",
    textAlign: "center",
    fontSize: 40,
    fontWeight: 'bold'
  },
  //pressed:{
  //  opacity: 0.75
  //}
});
