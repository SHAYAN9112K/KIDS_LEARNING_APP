import { Entypo } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({onPress, name, size, color}){
    return <Pressable onPress={onPress} style = {({pressed}) => pressed && styles.pressed}>
        <Entypo name={name} size={size} color={color} />
    </Pressable>
}
export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})