import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../constants/Colors";

const RecordComp = ({ newScore, oldScore,totalScore, recordTitle }) => {
  const [score, setScore] = useState(0);
  const [Tscore, setTscore] = useState(0);

  useEffect(() => {
    const getdata = async () => {

      const Totalvalue = await AsyncStorage.getItem(totalScore);
      var Tsc = parseInt(Totalvalue);
      console.log("total score 1:  " + Tsc);
      if (Tsc != null && Tsc >= 0) {
        setTscore(Tsc);
      }

      const value = await AsyncStorage.getItem(newScore);
      var sc = parseInt(value);
      console.log("heresss:" + sc);

      var oldvalue = await AsyncStorage.getItem(oldScore);

      var oldscval = parseInt(oldvalue);

      const check = sc;

      if (check != 0) {
        var oldvalue = await AsyncStorage.getItem(oldScore);
        if (isNaN(oldvalue)) {
          oldvalue = 0;
        }
        if (oldvalue != null) {
          var Oldsc = parseInt(oldvalue);
          console.log("first: " + Oldsc);
          var sc = sc + Oldsc;
          console.log("first: " + sc);
        }
        setScore(sc);

        const jsonValue = JSON.stringify(sc);
        await AsyncStorage.setItem(oldScore, jsonValue).then(
          console.log("success")
        );

        const jsonValue1 = JSON.stringify(0);
        await AsyncStorage.setItem(newScore, jsonValue1).then(
          console.log("success set  to zero ")
        );
      } else {
        if (isNaN(oldscval)) {
          oldscval = 0;
          setScore(0);
        }
        setScore(oldscval);
      }
    };
    getdata();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recordTitle}</Text>
      {isNaN(score) ? (
        <>
        <Text style={styles.text}>Your Score: 0</Text>
        <Text style={styles.text}>Wrong Attempts: 0</Text>
        </>
      ) : (
        <>
        <Text style={styles.text}>Your Score: {score}</Text>
        <Text style={styles.text}>Wrong Attempts: {Tscore-score}</Text>
        </>
      )}

      {isNaN(Tscore) ? (
        <Text style={styles.text}>Total Attempts: 0</Text>
      ) : (
        <Text style={styles.text}>Total Attempts: {Tscore}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.color4,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.color2,
    margin: 20,
    overflow: "hidden",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
});

export default RecordComp;
