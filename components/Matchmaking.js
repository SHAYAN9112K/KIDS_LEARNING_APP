import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import EnglishPhonicsData from '../data/English-data/EnglishPhonicsData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../constants/Colors';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
``
const getNextSelection = () => {
  const shuffledData = EnglishPhonicsData.sort(() => 0.5 - Math.random());
  const images = shuffledData.slice(0, 3).map((item) => {
    const { name, image } = item;
    return { name, image };
  });
  const image = getRandomImage(images);
  const names = getRandomNames(images, image.name);

  return { image, names };
};

const getRandomNames = (images, selectedImageName) => {
  const shuffled = images.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map((item) => item.name);
};

const getRandomImage = (images) => {
  const randomIndex = getRandomInt(3);
  return images[randomIndex];
};

const Matchmaking = () => {
  const [selection, setSelection] = useState(getNextSelection());
  const [score, setScore] = useState(0);
  const [selectedName, setSelectedName] = useState(null);

  const handleNamePress = (name) => {
    if (name === selection.image.name) {
      setScore(score + 1);
    }
    setSelectedName(name);
  };

  const handleNextPress = async () => {
    const nextSelection = getNextSelection();
    setSelection(nextSelection);
    setSelectedName(null);
    await AsyncStorage.setItem('matchmakingResult', JSON.stringify(score)); // save result to async storage
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageConatiner} >
      <Image source={selection.image.image} style={styles.image} />
      </View>
      <View style={styles.namesContainer}>
        {selection.names.map((name) => (
          <TouchableOpacity
            key={name}
            style={[
              styles.nameButton,
              selectedName === name && name === selection.image.name && styles.correctButton,
              selectedName === name && name !== selection.image.name && styles.incorrectButton,
            ]}
            onPress={() => handleNamePress(name)}
            disabled={selectedName}
          >
            <Text style={styles.nameButtonText}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedName && (
        <View style={styles.feedbackContainer}>
          
          {selectedName === selection.image.name ? (
            <Text style={styles.feedbackText}>Correct!</Text>
          ) : (
            <Text style={styles.feedbackText}>Sorry, the correct answer was {selection.image.name}.</Text>
          )}
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next Question</Text>
          </TouchableOpacity>
        </View>
      )}
      {!selectedName && (
        <TouchableOpacity style={styles.submitButton} onPress={() => setSelectedName('submitted')}>
          <Text style={styles.submitButtonText}>Submit Answer</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 2,
    backgroundColor: Colors.secondary,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: 400,
    //aspectRatio: 0.9,
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
  namesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nameButton: {
    backgroundColor: Colors.color4,
    borderWidth: 1,
    borderColor: Colors.color2,
    borderRadius: 5,
    padding: 10,
    margin: 8
  },
  correctButton: {
    backgroundColor: '#7CFC00',
  },
  incorrectButton: {
    backgroundColor: '#FF0000',
  },
  nameButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'space-between',
  },
  feedbackContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: Colors.color2,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: Colors.color2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Matchmaking;


// import React, { useState, useEffect } from 'react';
// import { View, Text,Image, TouchableOpacity, StyleSheet } from 'react-native';
// import EnglishAlphabetsData from '../data/English-data/EnglishAlphabetsData';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // const images = [
// //   { name: 'circle', image: require('../assets/images/ShapesImages/circle.png') },
// //   { name: 'square', image: require('../assets/images/ShapesImages/square.png') },
// //   { name: 'triangle', image: require('../assets/images/ShapesImages/triangle.png') },
// // ];

// //get name and image from data object array
// const shuffledData = EnglishAlphabetsData.sort(() => 0.5 - Math.random());
// const images = shuffledData.slice(0, 3).map((item) => {
//   const { name, image } = item;
//   return { name, image };
// });




// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * max);
// };

// const getRandomNames = (images,selectedImageName) => {
  
//   const shuffled = images.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, 3).map((item) => item.name);
// };

// const getRandomImage = (images) => {
//   const randomIndex = getRandomInt(3);
//   return images[randomIndex];
// };

// const Matchmaking = ({data}) => {
//   console.log(images);

//   const [image, setImage] = useState(getRandomImage(images));
//   const [names, setNames] = useState(getRandomNames(images));
//   const [score, setScore] = useState(0);
//   const [selectedName, setSelectedName] = useState(null);

  

//   const handleNamePress = (name) => {
//     if (name === image.name) {
//       setScore(score + 1);
//     }
//     setSelectedName(name);
//   };
// //store
//   const handleNextPress = async () => {
//     setImage(getRandomImage(images));
//     setNames(getRandomNames(images));
//     setSelectedName(null);
//     await AsyncStorage.setItem('matchmakingResult', JSON.stringify(score)); // save result to async storage
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={image.image} style={styles.image} />
//       <View style={styles.namesContainer}>
//         {names.map((name) => (
//           <TouchableOpacity
//             key={name}
//             style={[
//               styles.nameButton,
//               selectedName === name && name === image.name && styles.correctButton,
//               selectedName === name && name !== image.name && styles.incorrectButton,
//             ]}
//             onPress={() => handleNamePress(name)}
//             disabled={selectedName}
//           >
//             <Text style={styles.nameButtonText}>{name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       {selectedName && (
//         <View style={styles.feedbackContainer}>
//           {selectedName === image.name ? (
//             <Text style={styles.feedbackText}>Correct!</Text>
//           ) : (
//             <Text style={styles.feedbackText}>Sorry, the correct answer was {image.name}.</Text>
//           )}
//           <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
//             <Text style={styles.nextButtonText}>Next Question</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {!selectedName && (
//         <TouchableOpacity style={styles.submitButton} onPress={() => setSelectedName('submitted')}>
//           <Text style={styles.submitButtonText}>Submit Answer</Text>
//         </TouchableOpacity>
//       )}
//       <Text style={styles.scoreText}>Score: {score}</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
//   namesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   nameButton: {
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 5,
//     padding: 10,
//   },
//   correctButton: {
//     backgroundColor: '#7CFC00',
//   },
//   incorrectButton: {
//     backgroundColor: '#FF0000',
//   },
//   nameButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   feedbackContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   feedbackText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   nextButton: {
//     backgroundColor: '#ADD8E6',
//     borderRadius: 5,
//     padding: 10,
//   },
//   nextButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   submitButton: {
//     backgroundColor: '#ADD8E6',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//   },
//   submitButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   scoreText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });

// export default Matchmaking;