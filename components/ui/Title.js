import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function Title({children}) {
    return <Text style= {styles.title}>{children}</Text>
}
export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 44,
        fontWeight: "bold",
        color: Colors.color2,
        //backgroundColor: Colors.color5,
        //borderWidth: 1,
        borderColor: Colors.color4,
        marginTop: 8,
        padding: 7,
        textAlign: 'center',

    }
})