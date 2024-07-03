import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { useProgress } from 'react-native-track-player'
const SongSlider = () => {
  const {position, duration} = useProgress()
  return (
    <View>
        <Slider
          value={position}
          minimumValue={0}
          maximumValue={duration}
          thumbTintColor='#FFF'
          maximumTrackTintColor='#FFF'
          style={styles.sliderContainer}
        />
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderContainer}>
            {new Date(position*1000).toISOString().substring(15,19)}
          </Text>
          <Text style={styles.sliderContainer}>
            {new Date((duration-position)*1000).toISOString().substring(15,19)}
          </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    sliderContainer:{
        width:350,
        height:40,
        marginTop:10,
        marginRight:-30,
        marginLeft:-7,
        flexDirection:'row',
    },
    timeContainer:{
        width:340,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    time:{
        color:'#f0b30c'
    }

})
export default SongSlider