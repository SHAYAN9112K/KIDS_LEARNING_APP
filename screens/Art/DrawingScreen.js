import React, { Component } from 'react';
import { PanResponder, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

class DrawingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touchedCoordinates: [],
      touchedAreaSize: 10,
      isResizing: false,
      isTouching: false,
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (event, gestureState) => {
        this.setState({ isTouching: true, isResizing: false });
      },
      onPanResponderMove: (event, gestureState) => {
        if (!this.state.isResizing && this.state.isTouching) {
          const { pageX, pageY } = event.nativeEvent;
          this.addCoordinate(pageX, pageY);
        }
      },
      onPanResponderRelease: () => {
        this.setState({ isTouching: false });
      },
    });
  }

  addCoordinate(x, y) {
    const { touchedCoordinates, touchedAreaSize } = this.state;
    const coordinate = { x, y, size: touchedAreaSize };
    this.setState({
      touchedCoordinates: [...touchedCoordinates, coordinate],
    });
  }

  handleTouchedAreaSize = (size) => {
    this.setState({ touchedAreaSize: size });
  };

  handleClear = () => {
    this.setState({ touchedCoordinates: [] });
  };

  render() {
    const { touchedCoordinates, touchedAreaSize } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.shapeContainer}>
          <View style={{ flex: 1 }} {...this.panResponder.panHandlers}>
            {touchedCoordinates.map((coord, index) => (
              <View
                key={index}
                style={{
                  position: 'absolute',
                  left: coord.x - 20,
                  top: coord.y - 120,
                  width: coord.size,
                  height: coord.size,
                  borderColor: 'black',
                  borderWidth: 1,
                  borderRadius: coord.size / 2,
                  backgroundColor: 'black',
                }}
              />
            ))}
          </View>
        </View>


        <Text style={{color: "white",textAlign:"center",marginTop:12,fontSize:20,fontWeight: 'bold' }}>Select brush size</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleTouchedAreaSize(10)}
          >
            <View style={styles.buttonCircle} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleTouchedAreaSize(20)}
          >
            <View style={[styles.buttonCircle, { width: 15, height: 15 }]} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleTouchedAreaSize(30)}
          >
            <View style={[styles.buttonCircle, { width: 20, height: 20 }]} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleTouchedAreaSize(40)}
          >
            <View style={[styles.buttonCircle, { width: 25, height: 25 }]} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.handleClear}>
            <Entypo name="trash" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 20,
  },
  shapeContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4287f5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
  },
  buttonCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default DrawingScreen;
