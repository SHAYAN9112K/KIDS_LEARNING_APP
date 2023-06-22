import { Text, View, StyleSheet} from "react-native";
import UrduMatchmaking from "../../components/UrduMatchmaking";
import UrduPhonicsData from "../../data/Urdu-data/UrduPhonicsData";
import MatchMaking1 from "../../components/MatchMaking1";
import storagename from "../../data/AsyncStorage/AsyncStorageNames";



function UrduMatchmakingScreen(){
    return <MatchMaking1 data = {UrduPhonicsData}   storage={storagename.UrduScore} totalScore={storagename.UrduTotalScore}/>
}
export default UrduMatchmakingScreen;