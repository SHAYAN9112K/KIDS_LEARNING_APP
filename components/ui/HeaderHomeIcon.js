// import { useLayoutEffect } from "react";
// import { useNavigation } from "@react-navigation/native";
// import IconButton from "./IconButton";
// function HeaderHomeIcon(){
//     const navigation = useNavigation();

//     function headerHomeNavigationHandler(){
//         navigation.navigate("Home");
//     }

//     useLayoutEffect(()=>{
//         navigation.setOptions({
//             headerRight: () => {
//                 return <IconButton onPress={headerHomeNavigationHandler} name= {"home"} size= {50} color={'black'}/>

//             }
//         });
//     }, [navigation, headerHomeNavigationHandler]);
// }
// export default HeaderHomeIcon;