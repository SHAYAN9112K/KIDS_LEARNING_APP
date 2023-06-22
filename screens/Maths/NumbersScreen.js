import NumbersData from "../../data/Math-data/NumbersData";
import DisplayData from "../../components/DisplayData";

function NumbersScreen() {

  return <DisplayData data={NumbersData} maxLength={19} />;
}
export default NumbersScreen;