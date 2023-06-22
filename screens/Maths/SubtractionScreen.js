import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Colors from '../../constants/Colors';
import IconButton from '../../components/ui/IconButton';

const SubtractionScreen = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [difference, setDifference] = useState(0);

  const subtractNumbers = () => {
    let randomNumber1 = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 10);

    // while (randomNumber1 <= randomNumber2) {
    //   randomNumber2 = Math.floor(Math.random() * 10);
    // }

    setNumber1(randomNumber1);
    setNumber2(randomNumber2);
    setDifference(randomNumber1 - randomNumber2);
  };

  const handleNextClick = () => {
    subtractNumbers();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Subtraction</Text>
      
      <View style= {styles.numbersContainer}>
      <Text style={styles.text}>{number1} - {number2}</Text>
      
      <Text style={styles.text}>= {difference}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <IconButton onPress={handleNextClick} name = "arrow-bold-right" size={80} color ={Colors.primary}/> 
      </View>

      {/* <Button
        title="Next"
        onPress={handleNextClick}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.secondary,
  },
    numbersContainer: {
        justifyContent: "center",
        //alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 2,
        backgroundColor: Colors.color4,
        borderColor: Colors.color2,
        borderWidth: 3,
        borderRadius: 30,
        elevation: 60,
    },
    buttonContainer:{
        marginBottom: 40,
        marginHorizontal: 20,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
    },
  text: {
    fontSize: 150,
    color: 'white',
    backgroundColor: Colors.color4,
    //borderWidth: 1,
    borderColor: Colors.color2,
    borderRadius: 5,
    padding: 10,
    margin: 8,
  },
  paragraph: {
    fontSize: 60,
    color: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical:10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.color2,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    elevation: 60,
  },
});

export default SubtractionScreen;