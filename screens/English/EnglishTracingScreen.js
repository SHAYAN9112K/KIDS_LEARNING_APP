import React, { Component } from 'react';
import { PanResponder, View, ImageBackground, ScrollView, TouchableOpacity, Text } from 'react-native';
import Colors from '../../constants/Colors';

class EnglishTracingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touchedCoordinates: [],
      selectedAlphabet: 'A',
      imagePositionX: 0,
      imagePositionY: 0,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        this.addCoordinate(
          event.nativeEvent.pageX - this.state.imagePositionX,
          event.nativeEvent.pageY - this.state.imagePositionY
        );
      },
      onPanResponderMove: (event, gestureState) => {
        this.addCoordinate(
          event.nativeEvent.pageX - this.state.imagePositionX,
          event.nativeEvent.pageY - this.state.imagePositionY
        );
      },
    });
  }

  handleLayout = (event) => {
    const { x, y } = event.nativeEvent.layout;
    this.setState({ imagePositionX: x, imagePositionY: y });
  };

  addCoordinate(x, y) {
    this.setState((prevState) => ({
      touchedCoordinates: [...prevState.touchedCoordinates, { x, y }],
    }));
  }

  handleAlphabetSelect = (alphabet) => {
    this.setState({ selectedAlphabet: alphabet, touchedCoordinates: [] });
  };

  render() {
    const { touchedCoordinates, selectedAlphabet, imagePositionX, imagePositionY } = this.state;
    const imagePaths = {
      A: require('../../assets/images/EnglishTracingAlphabets/A.jpg'),
      B: require('../../assets/images/EnglishTracingAlphabets/B.jpg'),
      C: require('../../assets/images/EnglishTracingAlphabets/C.jpg'),
      D: require('../../assets/images/EnglishTracingAlphabets/D.jpg'),
      E: require('../../assets/images/EnglishTracingAlphabets/E.jpg'),
      F: require('../../assets/images/EnglishTracingAlphabets/F.jpg'),
      G: require('../../assets/images/EnglishTracingAlphabets/G.jpg'),
      H: require('../../assets/images/EnglishTracingAlphabets/H.jpg'),
      I: require('../../assets/images/EnglishTracingAlphabets/I.jpg'),
      J: require('../../assets/images/EnglishTracingAlphabets/J.jpg'),
      K: require('../../assets/images/EnglishTracingAlphabets/K.jpg'),
      L: require('../../assets/images/EnglishTracingAlphabets/L.jpg'),
      M: require('../../assets/images/EnglishTracingAlphabets/M.jpg'),
      N: require('../../assets/images/EnglishTracingAlphabets/N.jpg'),
      O: require('../../assets/images/EnglishTracingAlphabets/O.jpg'),
      P: require('../../assets/images/EnglishTracingAlphabets/P.jpg'),
      Q: require('../../assets/images/EnglishTracingAlphabets/Q.jpg'),
      R: require('../../assets/images/EnglishTracingAlphabets/R.jpg'),
      S: require('../../assets/images/EnglishTracingAlphabets/S.jpg'),
      T: require('../../assets/images/EnglishTracingAlphabets/T.jpg'),
      U: require('../../assets/images/EnglishTracingAlphabets/U.jpg'),
      V: require('../../assets/images/EnglishTracingAlphabets/V.jpg'),
      W: require('../../assets/images/EnglishTracingAlphabets/W.jpg'),
      X: require('../../assets/images/EnglishTracingAlphabets/X.jpg'),
      Y: require('../../assets/images/EnglishTracingAlphabets/Y.jpg'),
      Z: require('../../assets/images/EnglishTracingAlphabets/Z.jpg'),      
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <ImageBackground
            source={imagePaths[selectedAlphabet]}
            style={{ flex: 1, resizeMode: 'contain' }}
            {...this.panResponder.panHandlers}
            onLayout={this.handleLayout}
          >
            <View style={{ flex: 1 }}>
              {touchedCoordinates.map((coord, index) => (
                <View
                  key={index}
                  style={{
                    position: 'absolute',
                    left: coord.x - 20, // Adjust position to center the circle
                    top: coord.y - 120, // Adjust position to center the circle
                    width: 60,
                    height: 60,
                    borderColor: 'black',
                    borderWidth: 30,
                    borderRadius: 30,
                    backgroundColor: 'black',
                  }}
                />
              ))}
            </View>
          </ImageBackground>
        </View>

        <View style={{ flex: 0.2, backgroundColor: Colors.primary, paddingHorizontal: 12, paddingVertical: 12 }}>
          <ScrollView horizontal contentContainerStyle={{ paddingBottom: 10 }} style={{ flex: 1 }}>
            {Array.from(Array(26)).map((_, index) => {
              const alphabet = String.fromCharCode(65 + index);

              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: Colors.color4,
                    paddingVertical: 1,
                    paddingHorizontal: 10,
                    marginHorizontal: 5,
                    borderWidth: 2,
                    borderRadius: 5,
                    borderColor: Colors.color2,
                  }}
                  onPress={() => this.handleAlphabetSelect(alphabet)}
                >
                  <Text style={{ color: 'white', fontSize: 60 }}>{alphabet}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'white' }}>-------------&gt;</Text>
        </View>
      </View>
    );
  }
}

export default EnglishTracingScreen;
