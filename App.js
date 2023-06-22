import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import EnglishScreen from './screens/English/EnglishScreen';
import UrduScreen from './screens/Urdu/UrduScreen';
import MathsScreen from './screens/Maths/MathsScreen';
import ArtScreen from './screens/Art/ArtScreen';
import RhymesScreen from './screens/Rhymes/RhymesScreen';
import ViewRecordsScreen from './screens/View_Records/ViewRecordsScreen';

import EnglishAlphabetsScreen from './screens/English/EnglishAlphabetsScreen';
import EnglishPhonicsScreen from './screens/English/EnglishPhonicsScreen';
import EnglishSpellingsScreen from './screens/English/EnglishSpellingsScreen';
import EnglishTracingScreen from './screens/English/EnglishTracingScreen';
import EnglishMatchmakingScreen from './screens/English/EnglishMatchmakingScreen';
import EnglishTouchAlphabetScreen from './screens/English/EnglishTouchAlphabetScreen';

import UrduAlphabetsScreen from './screens/Urdu/UrduAlphabetsScreen';
import UrduPhonicsScreen from './screens/Urdu/UrduPhonicsScreen';
import UrduSpellingsScreen from './screens/Urdu/UrduSpellingsScreen';
import UrduTracingScreen from './screens/Urdu/UrduTracingScreen';
import UrduMatchmakingScreen from './screens/Urdu/UrduMatchmakingScreen';
import UrduTouchAlphabetScreen from './screens/Urdu/UrduTouchAlphabetScreen';

import NumbersScreen from './screens/Maths/NumbersScreen';
import AdditionScreen from './screens/Maths/AdditionScreen';
import SubtractionScreen from './screens/Maths/SubtractionScreen';
import NumberTracingScreen from './screens/Maths/NumberTracingScreen';
import NumbersMatchMakingScreen from './screens/Maths/NumbersMatchmakingScreen';
import TouchNumberScreen from './screens/Maths/TouchNumberScreen';

import ColorsScreen from './screens/Art/ColorsScreen';
import ShapesScreen from './screens/Art/ShapesScreen';
import ShapesTracingScreen from './screens/Art/ShapesTracingScreen';
import ShapesMatchmakingScreen from './screens/Art/ShapesMatchmakingScreen';
import TouchColorScreen from './screens/Art/TouchColorScreen';
import DrawingScreen from './screens/Art/DrawingScreen';
import ColoringScreen from './screens/Art/ColoringScreen';

import EnglishRhymesScreen from './screens/Rhymes/EnglishRhymesScreen';
import UrduRhymesScreen from './screens/Rhymes/UrduRhymesScreen';
import EnglishRhymeOne from './screens/Rhymes/EnglishRhymeOne';
import EnglishRhymeTwo from './screens/Rhymes/EnglishRhymeTwo';
import EnglishRhymeThree from './screens/Rhymes/EnglishRhymeThree';
import EnglishRhymeFour from './screens/Rhymes/EnglishRhymeFour';
import EnglishRhymeFive from './screens/Rhymes/EnglishRhymeFive';
import EnglishRhymeSix from './screens/Rhymes/EnglishRhymeSix';
import UrduRhymeOne from './screens/Rhymes/UrduRhymeOne';
import UrduRhymeTwo from './screens/Rhymes/UrduRhymeTwo';
import UrduRhymeThree from './screens/Rhymes/UrduRhymeThree';
import UrduRhymeFour from './screens/Rhymes/UrduRhymeFour';
import UrduRhymeFive from './screens/Rhymes/UrduRhymeFive';
import UrduRhymeSix from './screens/Rhymes/UrduRhymeSix';


import Colors from './constants/Colors';




const Stack = createNativeStackNavigator();

// const MyTheme = {
//   dark: false,
//   Colors: {
//     primary: '#2B004F',
//     color1: '391354', //'#35D461',
//     color2: '#F9F104',
//     color3: '#F99D07',
//     color4: '#882FF6',
//     color5: '#37B6F6',
//     secondary: '#17B5E5'
// };
//   }


export default function App() {
  // const navigation = useNavigation();
  //   function homeNavigationHandler(){
  //       navigation.navigate("Home");
  //   }
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer >
      <Stack.Navigator 
      initialRouteName='Welcome'
      screenOptions={{
        headerStyle:{backgroundColor: Colors.color2},
        headerTintColor: 'black',
        //contentStyle: {backgroundColor: 'black'}
        //headerRight: ()=>{
        //  return <IconButton name= {"home"} size={32} color = "black"/>
        //}
      }
      }>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerBackTitleVisible: false}}/>
        <Stack.Screen name="EnglishScreen" component={EnglishScreen} options={{title: 'English'}} />
        <Stack.Screen name="UrduScreen" component={UrduScreen} options={{title: 'Urdu'}}/>
        <Stack.Screen name="MathsScreen" component={MathsScreen} options={{title: 'Maths'}}/>
        <Stack.Screen name="ArtScreen" component={ArtScreen} options={{title: 'Art'}}/>
        <Stack.Screen name="RhymesScreen" component={RhymesScreen} options={{title: 'Rhymes'}}/>
        <Stack.Screen name='ViewRecordsScreen' component={ViewRecordsScreen} options={{title: 'Records'}}/>
        
        <Stack.Screen name="EnglishAlphabetsScreen" component={EnglishAlphabetsScreen} options={{title: 'English Alphabets'}}/>
        <Stack.Screen name="EnglishPhonicsScreen" component={EnglishPhonicsScreen} options={{title: 'English Phonics'}}/>
        <Stack.Screen name="EnglishSpellingsScreen" component={EnglishSpellingsScreen} options={{title: 'English Spellings'}}/>
        <Stack.Screen name="EnglishTracingScreen" component={EnglishTracingScreen} options={{title: 'English Tracing'}}/>
        <Stack.Screen name="EnglishMatchmakingScreen" component={EnglishMatchmakingScreen} options={{title: 'English Matchmaking'}}/>
        <Stack.Screen name="EnglishTouchAlphabetScreen" component={EnglishTouchAlphabetScreen} options={{title: 'Touch English Alphabet'}}/>

        <Stack.Screen name="UrduAlphabetsScreen" component={UrduAlphabetsScreen} options={{title: 'Urdu Alphabets'}}/>
        <Stack.Screen name="UrduPhonicsScreen" component={UrduPhonicsScreen} options={{title: 'Urdu Phonics'}}/>
        <Stack.Screen name="UrduSpellingsScreen" component={UrduSpellingsScreen} options={{title: 'Urdu Spellings'}}/>
        <Stack.Screen name="UrduTracingScreen" component={UrduTracingScreen} options={{title: 'Urdu Tracing'}}/>
        <Stack.Screen name="UrduMatchmakingScreen" component={UrduMatchmakingScreen} options={{title: 'Urdu Matchmaking'}}/>
        <Stack.Screen name='UrduTouchAlphabetScreen' component={UrduTouchAlphabetScreen} options={{title: 'Touch Urdu Alphabet'}}/>

        <Stack.Screen name="NumbersScreen" component={NumbersScreen} options={{title: 'Numbers'}}/>
        <Stack.Screen name="AdditionScreen" component={AdditionScreen} options={{title: 'Addition'}}/>
        <Stack.Screen name="SubtractionScreen" component={SubtractionScreen} options={{title: 'Subtraction'}}/>
        <Stack.Screen name="NumberTracingScreen" component={NumberTracingScreen} options={{title: 'Number Tracing'}}/>
        <Stack.Screen name="NumbersMatchmakingScreen" component={NumbersMatchMakingScreen} options={{title: 'Numbers Matchmaking'}}/>
        <Stack.Screen name='TouchNumberScreen' component={TouchNumberScreen} options={{title: 'Touch Numbers'}}/>
      
        <Stack.Screen name="ShapesScreen" component={ShapesScreen} options={{title: 'Shapes'}}/>
        <Stack.Screen name="ColorsScreen" component={ColorsScreen} options={{title: 'Colors'}}/>
        <Stack.Screen name="ShapesTracingScreen" component={ShapesTracingScreen} options={{title: 'Shapes Tracing'}}/>
        <Stack.Screen name="ShapesMatchmakingScreen" component={ShapesMatchmakingScreen} options={{title: 'Shapes Matchmaking'}}/>
        <Stack.Screen name="TouchColorScreen" component={TouchColorScreen} options={{title: 'Touch Color'}}/>
        <Stack.Screen name='DrawingScreen' component={DrawingScreen} options={{title: 'Drawing'}}/>
        <Stack.Screen name="ColoringScreen" component={ColoringScreen} options={{title: 'Coloring'}}/>

        <Stack.Screen name='EnglishRhymesScreen' component={EnglishRhymesScreen} options = {{title: 'English Rhymes'}} />
        <Stack.Screen name='UrduRhymesScreen' component={UrduRhymesScreen} options = {{title: 'Urdu Rhymes'}} />
        <Stack.Screen name='EnglishRhymeOne' component={EnglishRhymeOne} options = {{title: 'ABC Song'}} />
        <Stack.Screen name='EnglishRhymeTwo' component={EnglishRhymeTwo} options = {{title: 'Black Sheep'}} />
        <Stack.Screen name='EnglishRhymeThree' component={EnglishRhymeThree} options = {{title: 'Jhony Jhony'}} />
        <Stack.Screen name='EnglishRhymeFour' component={EnglishRhymeFour} options = {{title: 'Wheels on the bus'}} />
        <Stack.Screen name='EnglishRhymeFive' component={EnglishRhymeFive} options = {{title: 'Baby shark'}} />
        <Stack.Screen name='EnglishRhymeSix' component={EnglishRhymeSix} options = {{title: 'Twinkle twinkle'}} />
        <Stack.Screen name='UrduRhymeOne' component={UrduRhymeOne} options = {{title: 'Urdu Alphabets'}} />
        <Stack.Screen name='UrduRhymeTwo' component={UrduRhymeTwo} options = {{title: 'Bul bul ka baccha'}} />
        <Stack.Screen name='UrduRhymeThree' component={UrduRhymeThree} options = {{title: 'School chalo'}} />
        <Stack.Screen name='UrduRhymeFour' component={UrduRhymeFour} options = {{title: 'Chuck Chuk'}} />
        <Stack.Screen name='UrduRhymeFive' component={UrduRhymeFive} options = {{title: 'Chutti si munni'}} />
        <Stack.Screen name='UrduRhymeSix' component={UrduRhymeSix} options = {{title: 'Ek mota hathi'}} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
