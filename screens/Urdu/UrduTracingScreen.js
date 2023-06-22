import React, { Component } from 'react';
import { PanResponder, View, ImageBackground, ScrollView, TouchableOpacity, Text } from 'react-native';
import Colors from '../../constants/Colors';
class UrduTracingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touchedCoordinates: [],
      selectedAlphabet: 'ا',
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
      ا: require('../../assets/images/UrduTracingAlphabets/Alif.jpg'),
      ب: require('../../assets/images/UrduTracingAlphabets/baaa.jpg'),
      پ: require('../../assets/images/UrduTracingAlphabets/paaa.jpg'),
       ت: require('../../assets/images/UrduTracingAlphabets/taa.jpg'),
       ث: require('../../assets/images/UrduTracingAlphabets/saa.jpg'),
       ج: require('../../assets/images/UrduTracingAlphabets/jeem.jpg'),
       چ: require('../../assets/images/UrduTracingAlphabets/chaa.jpg'),
       ح: require('../../assets/images/UrduTracingAlphabets/haa.jpg'),
       خ: require('../../assets/images/UrduTracingAlphabets/kha.jpg'),
       د: require('../../assets/images/UrduTracingAlphabets/daal.jpg'),
       ذ: require('../../assets/images/UrduTracingAlphabets/zaal.jpg'),
       ر: require('../../assets/images/UrduTracingAlphabets/raa.jpg'),
       ز: require('../../assets/images/UrduTracingAlphabets/zaa.jpg'),
    //   ژ: require('../../assets/images/UrduTracingAlphabets/Ze.jpg'),
       س: require('../../assets/images/UrduTracingAlphabets/seen.jpg'),
       ش: require('../../assets/images/UrduTracingAlphabets/sheen.jpg'),
       ص: require('../../assets/images/UrduTracingAlphabets/swad.jpg'),
       ض: require('../../assets/images/UrduTracingAlphabets/zwad.jpg'),
       ط: require('../../assets/images/UrduTracingAlphabets/twa.jpg'),
       ظ: require('../../assets/images/UrduTracingAlphabets/zwa.jpg'),
    //   ع: require('../../assets/images/UrduTracingAlphabets/Ain.jpg'),
    //   غ: require('../../assets/images/UrduTracingAlphabets/Ghay.jpg'),
    //   ف: require('../../assets/images/UrduTracingAlphabets/Fay.jpg'),
    //   ق: require('../../assets/images/UrduTracingAlphabets/Qaf.jpg'),
    //   ک: require('../../assets/images/UrduTracingAlphabets/Kaf.jpg'),
    //   گ: require('../../assets/images/UrduTracingAlphabets/Gaf.jpg'),
    //   ل: require('../../assets/images/UrduTracingAlphabets/Lam.jpg'),
    //   م: require('../../assets/images/UrduTracingAlphabets/Meem.jpg'),
    //   ن: require('../../assets/images/UrduTracingAlphabets/Noon.jpg'),
    //   و: require('../../assets/images/UrduTracingAlphabets/Waw.jpg'),
    //   ہ: require('../../assets/images/UrduTracingAlphabets/Hay.jpg'),
    //   ھ: require('../../assets/images/UrduTracingAlphabets/He.jpg'),
    //   ی: require('../../assets/images/UrduTracingAlphabets/Yay.jpg'),
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 ,}}>
          <ImageBackground
            source={imagePaths[selectedAlphabet]}
            style={{ flex: 1, resizeMode: 'cover' }}
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
            {Object.keys(imagePaths).map((alphabet, index) => (
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
                <Text style={{ color: 'black', fontSize: 60 }}>{alphabet}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'white' }}>-------------></Text>
        </View>
      </View>
    );
  }
}

export default UrduTracingScreen;
