import TouchAnswer from "../../components/TouchAnswer";
import EnglishAlphabetsData from "../../data/English-data/EnglishAlphabetsData";
import storagename from "../../data/AsyncStorage/AsyncStorageNames";

function EnglishTouchAlphabetScreen(){
    
    return <TouchAnswer data = {EnglishAlphabetsData} storage={storagename.EnglishTouchScore} totalScore={storagename.EnglishTotalTouchScore}/>
}
export default EnglishTouchAlphabetScreen;

// import React from "react";
// import { useState, useEffect } from "react";
// import { Text,View, StyleSheet, Pressable } from "react-native";
// import EnglishAlphabetsData from "../../data/English-data/EnglishAlphabetsData";
// import { Entypo } from '@expo/vector-icons';
// import { Audio } from 'expo-av';
// import Colors from "../../constants/Colors";

// function EnglishTouchAlphabetScreen(){
//     const randomObject1 = EnglishAlphabetsData[Math.floor(Math.random()*EnglishAlphabetsData.length)];
//     const randomObject2 = EnglishAlphabetsData[Math.floor(Math.random()*EnglishAlphabetsData.length)];
//     const randomObject3 = EnglishAlphabetsData[Math.floor(Math.random()*EnglishAlphabetsData.length)];
    
//     const optionsObject = [randomObject1,randomObject2, randomObject3] 
//     const answerObject = optionsObject[Math.floor(Math.random()*3)];
    
//     //Soound
//     const [sound, setSound] = React.useState();
//     const [name, setName] = React.useState();
//     const [name0, setName0] = React.useState();
//     const [name1, setName1] = React.useState();
//     const [name2, setName2] = React.useState();
//     const [ans, setAns] = React.useState();
//     const [change, setchange] = React.useState(1);
//     const [showAnswer, setShowAnswer] = React.useState('Result :');

//     async function playSound() {
            
//         const { sound } = await Audio.Sound.createAsync( answerObject.path );
//         setSound(sound);
    
//         await sound.playAsync();
//       }

//       async function playSound1() {
            
//         const { sound } = await Audio.Sound.createAsync( ans.path );
//         setSound(sound);
    
//         await sound.playAsync();
//       }

//       React.useEffect(() => {
//         playSound()
//         setName0(randomObject1.name)
//         setName1(randomObject2.name)
//         setName2(randomObject3.name)
//         const optionsObject = [name0,name1, name2] 
//         setName(answerObject.name)
//         setAns(answerObject)
        
//       }, [change]);
//       //handle options
//     function handleOption1(){
//         setchange(change+1);
//         if(name0 == name){
//             console.log("Correct");
//             setShowAnswer("Result : Correct")
//         } else{
//             console.log("InCorrect");
//             setShowAnswer("Result : InCorrect")
//         }
//     }
//     function handleOption2(){
//         setchange(change+1);
//         if(name1 == name){
//             console.log("Correct");
//             setShowAnswer("Result : Correct")
//         } else{
//             console.log("InCorrect");
//             setShowAnswer("Result : InCorrect")
//         }
//     }
//     function handleOption3(){
//         setchange(change+1);
//         if(name2 == name){
//             console.log("Correct");
//             setShowAnswer("Result : Correct")
//         } else{
//             console.log("InCorrect");
//             setShowAnswer("Result : InCorrect")
//         }
//     }

//     return <View style={styles.container}>
//         <Pressable onPress={playSound1}>
//             <Text style= {styles.paragraph} >Touch the  <Entypo name= "sound" size={45} color="white" /></Text>
//         </Pressable>

//         <View style= {styles.optionsContainer}>
//             <View style = {styles.optionOuterContainer}>
//             <Pressable onPress={handleOption1} style={styles.optionInnerContainer}>
//                 <Text style= {styles.optionText}>1.        {name0}</Text>
//             </Pressable>
//             </View>

//             <View style = {styles.optionOuterContainer}>
//             <Pressable onPress={handleOption2} style={styles.optionInnerContainer}>
//                 <Text style= {styles.optionText}>2.        {name1}</Text>
//             </Pressable>
//             </View>

//             <View style = {styles.optionOuterContainer}>
//             <Pressable onPress={handleOption3} style={styles.optionInnerContainer}>
//                 <Text style= {styles.optionText}>3.        {name2}</Text>
//             </Pressable>
//             </View>

//             <Text style= {styles.resultText}>{showAnswer}</Text>
//         </View>
//     </View>
    
// }
// export default EnglishTouchAlphabetScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         //justifyContent: "center",
//         paddingHorizontal: 20,
//         paddingVertical: 20,
//         backgroundColor: Colors.secondary,
//       },
    
//     paragraph: {
//         fontSize: 50,
//         color: 'white',
//         marginHorizontal: 20,
//         paddingHorizontal: 20,
//         paddingVertical:10,
//         marginBottom: 10,
//         justifyContent: "center",
//         alignItems: "center",
//         borderWidth: 3,
//         borderColor: Colors.color2,
//         backgroundColor: Colors.primary,
//         borderRadius: 30,
//         elevation: 60,
//       },
//       optionsContainer:{
//         marginVertical: 30
//       },
//       optionOuterContainer: {
//         borderWidth: 2,
//         borderColor: Colors.color2,
//         borderRadius: 28,
//         margin: 4,
//         marginVertical: 20,
//         overflow: "hidden",
//       },
//       optionInnerContainer: {
//         backgroundColor: Colors.color4,
//         paddingVertical: 12,
//         paddingHorizontal: 1,
//         elevation: 2,
//       },
//       optionText: {
//         color: "white",
//         textAlign: "center",
//         fontSize: 50,
//         fontWeight: 'bold'
//       },
//       resultText:{
//         color: "white",
//         fontSize: 45,
//         marginTop: 90,
//         fontWeight: 'bold'
//       }


// })