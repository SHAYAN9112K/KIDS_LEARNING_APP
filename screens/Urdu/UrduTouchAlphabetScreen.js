import TouchAnswer from "../../components/TouchAnswer";
import UrduAlphabetsData from "../../data/Urdu-data/UrduAlphabetsData";
import storagename from "../../data/AsyncStorage/AsyncStorageNames";


function UrduTouchAlphabetScreen(){
    return <TouchAnswer data = {UrduAlphabetsData} storage={storagename.UrduTouchScore} totalScore={storagename.UrduTotalTouchScore}/>
}
export default UrduTouchAlphabetScreen;