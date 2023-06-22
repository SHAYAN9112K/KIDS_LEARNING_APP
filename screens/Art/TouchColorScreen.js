import TouchAnswer from "../../components/TouchAnswer";
import ColorsData from "../../data/Art-data/ColorsData";

function TouchColorScreen(){
    return <TouchAnswer data = {ColorsData} storage={storagename.ArtTouchScore} totalScore={storagename.ArtTotalTouchScore}/>
}
export default TouchColorScreen;