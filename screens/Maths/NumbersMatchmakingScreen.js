// import { Text,View, StyleSheet } from "react-native";
import MatchMaking1 from "../../components/MatchMaking1";
import storagename from "../../data/AsyncStorage/AsyncStorageNames";
import NumbersData from '../../data/Math-data/NumbersData';

function NumbersMatchMakingScreen(){
    return <MatchMaking1 data = {NumbersData}   storage={storagename.MathScore} totalScore={storagename.MathTotalScore}/>
}
export default NumbersMatchMakingScreen;
