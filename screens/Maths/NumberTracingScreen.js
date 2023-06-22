import React, { Component } from 'react';
import { PanResponder, View, ImageBackground, ScrollView, TouchableOpacity, Text } from 'react-native';
import Colors from '../../constants/Colors';

class NumbersTracingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touchedCoordinates: [],
      selectedNumber: '0',
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

  handleNumberSelect = (number) => {
    this.setState({ selectedNumber: number, touchedCoordinates: [] });
  };

  render() {
    const { touchedCoordinates, selectedNumber, imagePositionX, imagePositionY } = this.state;
    const imagePaths = {
      '0': require('../../assets/images/NumberTracingImages/0.jpg'),
      '1': require('../../assets/images/NumberTracingImages/1.jpg'),
      '2': require('../../assets/images/NumberTracingImages/2.jpg'),
      '3': require('../../assets/images/NumberTracingImages/3.jpg'),
      '4': require('../../assets/images/NumberTracingImages/4.jpg'),
      '5': require('../../assets/images/NumberTracingImages/5.jpg'),
      '6': require('../../assets/images/NumberTracingImages/6.jpg'),
      '7': require('../../assets/images/NumberTracingImages/7.jpg'),
      '8': require('../../assets/images/NumberTracingImages/8.jpg'),
      '9': require('../../assets/images/NumberTracingImages/9.jpg'),
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <ImageBackground
            source={imagePaths[selectedNumber]}
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
            {Array.from(Array(10)).map((_, index) => {
              const number = index.toString();

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
                  onPress={() => this.handleNumberSelect(number)}
                >
                  <Text style={{ color: 'white', fontSize: 60 }}>{number}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'white' }}>-------------></Text>
        </View>
      </View>
    );
  }
}

export default NumbersTracingScreen;
