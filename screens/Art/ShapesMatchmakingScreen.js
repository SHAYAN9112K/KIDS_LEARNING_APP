//import { Text,View, StyleSheet } from "react-native";
import MatchMaking1 from "../../components/MatchMaking1";
import storagename from "../../data/AsyncStorage/AsyncStorageNames";
import ShapesData from "../../data/Art-data/ShapesData";

function ShapesMatchmakingScreen(){
    return <MatchMaking1 data = {ShapesData}   storage={storagename.ArtScore} totalScore={storagename.ArtTotalScore}/>
}
export default ShapesMatchmakingScreen;