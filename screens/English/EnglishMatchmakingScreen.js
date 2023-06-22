//import EnglishPhonicsData from '../../data/English-data/EnglishPhonicsData';
import EnglishAlphabetsData from '../../data/English-data/EnglishAlphabetsData';
import Matchmaking from '../../components/Matchmaking';
import MatchMaking1 from '../../components/MatchMaking1';
import EnglishPhonicsData from '../../data/English-data/EnglishPhonicsData';
import storagename from '../../data/AsyncStorage/AsyncStorageNames';


function EnglishMatchmakingScreen(){
     return <MatchMaking1 data = {EnglishPhonicsData}   storage={storagename.EnglishScore} totalScore={storagename.EnglishTotalScore}/>
}
export default EnglishMatchmakingScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// const data = [
//   {
//     id: 1,
//     image: require('../../assets/images/ColorsImages/green.png'),
//     text: 'Object 1'
//   },
//   {
//     id: 2,
//     image: require('../../assets/images/ColorsImages/green.png'),
//     text: 'Object 2'
//   },
//   {
//     id: 3,
//     image: require('../../assets/images/ColorsImages/green.png'),
//     text: 'Object 3'
//   },
//   // add more objects as needed
// ];

// export default function EnglishMatchmakingScreen(){
//   const [objects, setObjects] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [correctPairs, setCorrectPairs] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   useEffect(() => {
//     selectObjects();
//   }, []);

//   const selectObjects = () => {
//     const shuffled = data.sort(() => 0.5 - Math.random());
//     const selected = shuffled.slice(0, 3);
//     setObjects(selected);
//     setCorrectPairs(selected);
//   };

//   const handleSelect = (obj) => {
//     setSelected([...selected, obj]);
//   };

//   const handleReset = () => {
//     setSelected([]);
//     setShowResults(false);
//     selectObjects();
//   };

//   const checkResults = () => {
//     let correctCount = 0;
//     selected.forEach((obj) => {
//       if (correctPairs.includes(obj)) {
//         correctCount++;
//       }
//     });
//     return correctCount;
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.title}>Matching Algorithm</Text>
//       <Text style={styles.subtitle}>Match the images with their corresponding text:</Text> */}
//       <View style={styles.objectContainer}>
//         {objects.map((obj) => (
//           <TouchableOpacity key={obj.id} onPress={() => handleSelect(obj)}>
//             <View style={styles.imageContainer}>
//               <Image source={obj.image} style={styles.image} />
//               <Text style={styles.imageText}>{obj.text}</Text>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.selectedContainer}>
//         {selected.map((obj) => (
//           <View key={obj.id} style={styles.selectedObject}>
//             <Image source={obj.image} style={styles.selectedImage} />
//             <Text style={styles.selectedText}>{obj.text}</Text>
//           </View>
//         ))}
//       </View>
//       {showResults && (
//         <View style={styles.resultsContainer}>
//           <Text style={styles.resultsText}>
//             {checkResults() === 3 ? 'All answers are correct!' : `You got ${checkResults()} out of 3 correct.`}
//           </Text>
//           <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
//             <Text style={styles.resetButtonText}>Play Again</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {!showResults && selected.length === 3 && (
//         <TouchableOpacity style={styles.checkButton} onPress={() => setShowResults(true)}>
//           <Text style={styles.checkButtonText}>Check Answers</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //alignItems: 'center',
//     //justifyContent: 'center'
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   selectedImage:{
//     width: 10,
//     height: 10,
//   },
//   selectedObject:{
//     width: 10,
//     height: 10,
//   },
//   imageContainer:{
//     width: 10,
//     height: 10,
//   },
//   objectContainer:{
//     width: 10,
//     height: 10,
//   },
// });


