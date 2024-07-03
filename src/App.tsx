import React, {useState, useEffect} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {setupPlayer, addTrack} from '../MusicPlayerServics'
import MusicPlayer from './Screns/MusicPlayer';

 

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)   

  async function setup(){
    let issetup = await setupPlayer()

    if(issetup){
      await addTrack()
    }
    setIsPlayerReady(issetup)
  }


  useEffect(() => {
    setup()
  }, [])
  

  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }
  return (
     <View style={styles.constainer}>
        <StatusBar barStyle={'light-content'}/>
        <MusicPlayer />
     </View>
  );
}

const styles = StyleSheet.create({
   constainer:{
    flex:1,

   }
});

export default App;
