import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import Colors from '../constants/Colors';

const PlayUrduRhymeSix = () => {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlaying = async () => {
    if (playing) {
      await video.current.pauseAsync();
      setPlaying(false);
    } else {
      await video.current.playAsync();
      setPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={
          require('../assets/videos/Ek_Mota_Hathi.mp4')
        }
        resizeMode="cover"
        shouldPlay={playing}
        style={styles.video}
      />
      <TouchableOpacity style={styles.button} onPress={togglePlaying}>
        {playing ? (
          <Text style={styles.buttonText}>Pause</Text>
        ) : (
          <Text style={styles.buttonText}>Play</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  video: {
    width: '100%',
    height: 300,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PlayUrduRhymeSix;
