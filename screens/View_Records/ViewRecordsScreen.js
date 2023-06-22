import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import RecordComp from '../../components/RecordComp'
import storagename from '../../data/AsyncStorage/AsyncStorageNames'
import Colors from '../../constants/Colors'

const ViewRecordsScreen = () => {
  return (
    <View style={{flex:1, backgroundColor: Colors.primary}}>
      <ScrollView>
    <RecordComp newScore={storagename.EnglishScore}  oldScore={storagename.EnglishOldScore}  totalScore={storagename.EnglishTotalScore} recordTitle={'English Matchmaking Results'}/>
    <RecordComp newScore={storagename.UrduScore}  oldScore={storagename.UrduOldScore}  totalScore={storagename.UrduTotalScore} recordTitle={'Urdu Matchmaking Results'}/>
    <RecordComp newScore={storagename.MathScore}  oldScore={storagename.MathOldScore}  totalScore={storagename.MathTotalScore} recordTitle={'Math Matchmaking Results'}/>
    <RecordComp newScore={storagename.ArtScore}  oldScore={storagename.ArtOldScore}  totalScore={storagename.ArtTotalScore} recordTitle={'Art Matchmaking Results'}/>
    
    <RecordComp newScore={storagename.EnglishTouchScore}  oldScore={storagename.EnglishOldTouchScore}  totalScore={storagename.EnglishTotalTouchScore} recordTitle={'English Touch Results'}/>
    <RecordComp newScore={storagename.UrduTouchScore}  oldScore={storagename.UrduOldTouchScore}  totalScore={storagename.UrduTotalTouchScore} recordTitle={'Urdu Touch Results'}/>
    <RecordComp newScore={storagename.MathTouchScore}  oldScore={storagename.MathOldTouchScore}  totalScore={storagename.MathTotalTouchScore} recordTitle={'Math Touch Results'}/>
    <RecordComp newScore={storagename.ArtTouchScore}  oldScore={storagename.ArtOldTouchScore}  totalScore={storagename.ArtTotalTouchScore} recordTitle={'Art Touch Results'}/>

    </ScrollView>
    </View>
  )
}

export default ViewRecordsScreen

const styles = StyleSheet.create({})