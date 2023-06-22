import TouchAnswer from "../../components/TouchAnswer";
import NumbersData from "../../data/Math-data/NumbersData"

function TouchNumberScreen(){
    
    return <TouchAnswer data = {NumbersData} storage={storagename.MathTouchScore} totalScore={storagename.MathTotalTouchScore}/>
}
export default TouchNumberScreen;