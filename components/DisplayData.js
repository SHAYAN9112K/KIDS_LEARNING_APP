import React from "react";
import { Text, View, StyleSheet, Image, Button, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";

import PrimaryButton from "./ui/PrimaryButton";
import Colors from "../constants/Colors";
import IconButton from "./ui/IconButton";
//import Sound from "react-native-sound" 
import { Audio } from 'expo-av';
//import { useTheme } from "@react-navigation/native";


function DisplayData({data}) {
  
  var count = (Object.keys(data).length) - 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex == count) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(() => currentIndex + 1);
    }
  };
  const prev = () => {
    if (currentIndex == 0) return;
    else {
      setCurrentIndex(() => currentIndex - 1);
    }
  };

  //Sound manager
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    
    const { sound } = await Audio.Sound.createAsync( data[currentIndex].path
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  //image Sound 
  async function playSoundImage() {
    console.log('Loading Sound');
    
    const { sound } = await Audio.Sound.createAsync( data[currentIndex].imgAudio
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  return (
    <View style={styles.container}>

      <Pressable 
      style={styles.imageConatiner}
      onPress={playSoundImage}>
      <Image
          // source={require(data[currentIndex].image)}
          source={data[currentIndex].image}
          style={styles.image}
          resizeMode="contain"
        />
      </Pressable>


      {/* <TouchableOpacity onPress={playSoundImage}>
        <View style={styles.imageConatiner} >
        <Image
          // source={require(data[currentIndex].image)}
          source={data[currentIndex].image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      </TouchableOpacity> */}
      <View style={styles.textContainer} >
          <PrimaryButton 
          onPress={playSound}
          >{data[currentIndex].data}</PrimaryButton>
      </View>

      <View style={styles.buttonsContainer}>

        <IconButton onPress={prev} name = "arrow-bold-left" size={50} color ={Colors.primary}/> 
        <IconButton onPress={next} name = "arrow-bold-right" size={50} color ={Colors.primary}/> 
        
        {/* <Pressable onPress={prev} android_ripple={{ color: "#640233", opacity: 0.75 }}>
          <Entypo name="arrow-bold-left" size={50} color={Colors.primary} />
        </Pressable>

        <Pressable onPress={next} android_ripple={{ color: "#640233", opacity: 0.75 }}>
          <Entypo name="arrow-bold-right" size={50} color={Colors.primary} />
        </Pressable> */}
         
        {/* <PrimaryButton onPress={prev}> <Image style={styles.iconImage} source={require('../assets/images/Others/PrevButton.png')}/> </PrimaryButton>
        <PrimaryButton onPress={next}> <Image style={styles.iconImage} source={require('../assets/images/Others/NextButton.png')}/> </PrimaryButton> */}
      
      </View>
    </View>
  );
}

export default DisplayData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 2,
    paddingVertical: 20,
    backgroundColor: Colors.secondary,
  },
  // iconImage: {
  //   resizeMode: "cover",
  //   width: 60,
  //   height: 30,
  // },
  textContainer: {
    marginHorizontal: 32,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageConatiner: {
    flex: 1,
    overflow: "hidden",
    marginHorizontal: 36,
    paddingVertical:140,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: Colors.color2,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    elevation: 60,
  },
  image: {
    flex: 1,
    aspectRatio: 0.9,
    //width: "100%",
    //height: 500,
  },
  buttonsContainer: {
    flexDirection: "row",
    //marginBottom: 40,
    marginHorizontal: 20,
    padding: 12,
    justifyContent: "space-between",
    //borderWidth: 2,
    //borderColor: Colors.color2,
    //backgroundColor: Colors.color5,
    //borderRadius: 34,
    //elevation: 20,
  },
});
