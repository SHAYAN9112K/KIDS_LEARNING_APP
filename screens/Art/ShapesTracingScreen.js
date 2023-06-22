import React, { Component } from 'react';
import { PanResponder, View, ImageBackground, ScrollView, TouchableOpacity, Text } from 'react-native';
import Colors from '../../constants/Colors';

class ShapesTracingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touchedCoordinates: [],
      selectedShape: 'rectangle',
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

  handleShapeSelect = (shape) => {
    this.setState({ selectedShape: shape, touchedCoordinates: [] });
  };

  render() {
    const { touchedCoordinates, selectedShape, imagePositionX, imagePositionY } = this.state;
    const imagePaths = {
      rectangle: require('../../assets/images/ShapesTracingImages/rectangle.jpg'),
      triangle: require('../../assets/images/ShapesTracingImages/triangle.jpg'),
      circle: require('../../assets/images/ShapesTracingImages/circle.jpg'),
      square: require('../../assets/images/ShapesTracingImages/square.jpg'),
      pentagon: require('../../assets/images/ShapesTracingImages/pentagon.jpg'),
      star: require('../../assets/images/ShapesTracingImages/star.jpg'),
    };

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <ImageBackground
            source={imagePaths[selectedShape]}
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
            <TouchableOpacity
              style={{
                backgroundColor: Colors.color4,
                paddingVertical: 1,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Colors.color2,
              }}
              onPress={() => this.handleShapeSelect('rectangle')}
            >
              <Text style={{ color: 'white', fontSize: 60 }}>Rectangle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.color4,
                paddingVertical: 1,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Colors.color2,
              }}
              onPress={() => this.handleShapeSelect('triangle')}
            >
              <Text style={{ color: 'white', fontSize: 60 }}>Triangle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.color4,
                paddingVertical: 1,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Colors.color2,
              }}
              onPress={() => this.handleShapeSelect('circle')}
            >
              <Text style={{ color: 'white', fontSize: 60 }}>Circle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.color4,
                paddingVertical: 1,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Colors.color2,
              }}
              onPress={() => this.handleShapeSelect('square')}
            >
              <Text style={{ color: 'white', fontSize: 60 }}>Square</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.color4,
                paddingVertical: 1,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Colors.color2,
              }}
              onPress={() => this.handleShapeSelect('pentagon')}
            >
              <Text style={{ color: 'white', fontSize: 60 }}>Pentagon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.color4,
                paddingVertical: 1,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: Colors.color2,
              }}
              onPress={() => this.handleShapeSelect('star')}
            >
              <Text style={{ color: 'white', fontSize: 60 }}>Star</Text>
            </TouchableOpacity>
          </ScrollView>
          <Text style={{ fontSize: 40, textAlign: 'center', color: 'white' }}>-------------></Text>
        </View>
      </View>
    );
  }
}

export default ShapesTracingScreen;
