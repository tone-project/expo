import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import RecordingBtn from '../components/recordingBtn';

const RecordingPage = ({navigation}) => {
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    (async() => {
      const {status} = await Audio.requestPermissionsAsync();
      console.log(status);
    })()
  }, [])

///

  // async function startRecording() {
  //   try {
  //     console.log('Requesting permissions..');
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     }); 
  //     console.log('Starting recording..');
  //     const { recording } = await Audio.Recording.createAsync(
  //        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
  //     );
  //     setRecording(recording);
  //     console.log('Recording started');
  //   } catch (err) {
  //     console.error('Failed to start recording', err);
  //   }
  // }

  // async function stopRecording() {
  //   console.log('Stopping recording..');
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI(); 
  //   console.log('Recording stopped and stored at', uri);
  // }

///


  return (
    <View style={styles.container}>
      {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      /> */}
        <View style={styles.textBox}>
          <Text style={styles.text}>
            {
              !recording ? 'Натисніть для запису звуку'
                          : 'Слухаємо...'
            }
          </Text>
        </View>
      <View>
        <TouchableOpacity 
          style={styles.btn}
          onPress={() => {recording ? navigation.navigate('NewSoundProbability') : setRecording(true)}}>
          <RecordingBtn recording={recording}/>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    textBox: {
      width: 153,
      height: 48,
    },
    text: {
      color: '#F2F2F2',
      fontFamily: 'Inter_400Regular',
      fontSize: 18,
      fontStyle: 'normal',
      lineHeight: 24,
      textAlign: 'center',
    },
    btn: {
      width: 214,
      height: 214,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 125,
      marginTop: 56,
    }
})

export default RecordingPage