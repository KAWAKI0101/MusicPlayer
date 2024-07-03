import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.error('Error skipping to next track:', error);
    }
  };

  const skipToPrevious = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.error('Error skipping to previous track:', error);
    }
  };

  const togglePlayback = async () => {
    try {
      const currentTrack = await TrackPlayer.getActiveTrackIndex();
      if (currentTrack !== null) {
        const playbackState = await TrackPlayer.getState();
        if (playbackState === State.Paused || playbackState === State.Ready) {
          await TrackPlayer.play();
        } else if (playbackState === State.Playing) {
          await TrackPlayer.pause();
        }
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={togglePlayback} style={styles.playButton}>
        <Icon
          style={styles.icon}
          name= {playBackState === State.Playing ? "pause" : "play-arrow"} 
          size={75}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-next" size={40} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 46,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 30,
  },
});

export default ControlCenter;
