import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import EnglishPhonicsData from "../data/English-data/EnglishPhonicsData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../constants/Colors";


const MatchMaking1 = ({ data ,  storage ,totalScore}) => {

  const randomObject1 = data[Math.floor(Math.random() * data.length)];
  const randomObject2 = data[Math.floor(Math.random() * data.length)];
  const randomObject3 = data[Math.floor(Math.random() * data.length)];

  const optionsObject = [randomObject1, randomObject2, randomObject3];
  const answerObject = optionsObject[Math.floor(Math.random() * 3)];

  const [name, setName] = useState();
  const [name0, setName0] = useState();
  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [ans, setAns] = useState("");
  const [change, setchange] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [scr, setScr] = useState(0);
  const [Rscr, setRscr] = useState(0);
  const [showAnswer, setShowAnswer] = useState("Result :");

  useEffect(()=>{

    const getVal=async()=>{
      const Totalvalue = await AsyncStorage.getItem(totalScore);
    var Tsc=parseInt(Totalvalue);
    console.log('total score:  '+Tsc)
    if(Tsc!=null && Tsc>=0){
      setTotalCount(Tsc);
    }
    }
    getVal();
    

  },[])

  useEffect(() => {
    if(randomObject1.type==="Num"){
      setName0(randomObject1.data);
    setName1(randomObject2.data);
    setName2(randomObject3.data);
    const optionsObject = [name0, name1, name2];
    setName(answerObject.data);
    setAns(answerObject);

    }else{
    setName0(randomObject1.name);
    setName1(randomObject2.name);
    setName2(randomObject3.name);
    const optionsObject = [name0, name1, name2];
    setName(answerObject.name);
    setAns(answerObject);
    }
  }, [change]);

  const handleOption1 = async () => {
    const jsonValueTotal = JSON.stringify((totalCount+1));
    await AsyncStorage.setItem(totalScore, jsonValueTotal).then(console.log('success'));
    setTotalCount(totalCount+1)
    setchange(change + 1);
    if (name0 == name) {
      setScr(scr + 1);
      console.log("Correct");
      setShowAnswer("Result : Correct");
      const jsonValue = JSON.stringify((scr+1));
    await AsyncStorage.setItem(storage, jsonValue).then(console.log('success'));
    } else {
      console.log("InCorrect");
      setShowAnswer("Result : InCorrect");
    }
  };
  const handleOption2 = async () => {
    const jsonValueTotal = JSON.stringify((totalCount+1));
    await AsyncStorage.setItem(totalScore, jsonValueTotal).then(console.log('success'));
    setTotalCount(totalCount+1)
    setchange(change + 1);
    if (name1 == name) {
      setScr(scr + 1);
      console.log("Correct");
      setShowAnswer("Result : Correct");
      const jsonValue = JSON.stringify(scr+1);
      console.log('ressss:'+jsonValue)
    await AsyncStorage.setItem(storage, jsonValue).then(console.log('success'));
    } else {
      console.log("InCorrect");
      setShowAnswer("Result : InCorrect");
    }
  };
  const handleOption3 = async () => {
    const jsonValueTotal = JSON.stringify((totalCount+1));
    await AsyncStorage.setItem(totalScore, jsonValueTotal).then(console.log('success'));
    setTotalCount(totalCount+1)
    setchange(change + 1);
    if (name2 == name) {
      setScr(scr + 1);
      console.log("Correct");
      setShowAnswer("Result : Correct");
      const jsonValue = JSON.stringify(scr+1);
    await AsyncStorage.setItem(storage, jsonValue).then(console.log('success'));
    } else {
      console.log("InCorrect");
      setShowAnswer("Result : InCorrect");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageConatiner}>
        <Image source={ans.image} style={styles.image} />
      </View>
      <View style={styles.namesContainer}>
        <TouchableOpacity
          style={[
            styles.nameButton,
            // selectedName === randomObject1 &&
            //   randomObject1 === selection.image.name &&
            //   styles.correctButton,
            // selectedName === randomObject1 &&
            //   randomObject1 !== selection.image.name &&
            //   styles.incorrectButton,
          ]}
          onPress={() => handleOption1()}
          //   disabled={selectedName}
        >
          <Text style={styles.nameButtonText}>{name0}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.nameButton,
            // selectedName === randomObject1 &&
            //   randomObject1 === selection.image.name &&
            //   styles.correctButton,
            // selectedName === randomObject1 &&
            //   randomObject1 !== selection.image.name &&
            //   styles.incorrectButton,
          ]}
          onPress={() => handleOption2()}
        >
          <Text style={styles.nameButtonText}>{name1}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.nameButton,
            // selectedName === randomObject1 &&
            //   randomObject1 === selection.image.name &&
            //   styles.correctButton,
            // selectedName === randomObject1 &&
            //   randomObject1 !== selection.image.name &&
            //   styles.incorrectButton,
          ]}
          onPress={() => handleOption3()}
        >
          <Text style={styles.nameButtonText}>{name2}</Text>
        </TouchableOpacity>
      </View>

      {/* {selectedName && (
        <View style={styles.feedbackContainer}>
          {selectedName === selection.image.name ? (
            <Text style={styles.feedbackText}>Correct!</Text>
          ) : (
            <Text style={styles.feedbackText}>
              Sorry, the correct answer was {selection.image.name}.
            </Text>
          )}
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next Question</Text>
          </TouchableOpacity>
        </View>
      )}
      {!selectedName && (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setSelectedName("submitted")}
        >
          <Text style={styles.submitButtonText}>Submit Answer</Text>
        </TouchableOpacity>
      )} */}
      <Text style={styles.scoreText}>Previous {showAnswer}</Text>
      <Text style={styles.scoreText}>Score: {scr}</Text>
    </View>
  );
};

export default MatchMaking1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 2,
    backgroundColor: Colors.secondary,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: 400,
    //aspectRatio: 0.9,
  },
  imageConatiner: {
    flex: 1,
    overflow: "hidden",
    marginHorizontal: 36,
    paddingVertical: 140,
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  nameButton: {
    backgroundColor: Colors.color4,
    borderWidth: 1,
    borderColor: Colors.color2,
    borderRadius: 5,
    padding: 10,
    margin: 8,
  },
  correctButton: {
    backgroundColor: "#7CFC00",
  },
  incorrectButton: {
    backgroundColor: "#FF0000",
  },
  nameButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    justifyContent: "space-between",
  },
  feedbackContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 20,
    fontWeight: "bold",
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
    fontWeight: "bold",
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: Colors.color2,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
});
