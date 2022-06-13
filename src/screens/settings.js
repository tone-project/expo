import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, CancelButton, Switch } from 'react-native'
import userStore from '../store/userStore';
import { NavigationContainer, StackActions, NavigationContext, } from '@react-navigation/native';
import avatar from '../../assets/avatar.png'
import CustomView from '../components/customView';
import Status from '../components/status';
import { StatusBar } from 'expo-status-bar';
import StatusChange from '../components/stutusChange';
//import Icon from 'react-native-vector-icons/Ionicons'
import { Icon } from '@iconify/react';


export default function Settings({navigation}) {

    const handleSignOut = () => {
        userStore.auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }
  const [vibration, setVibration] = useState(false);
  const toggleVibration = () =>{ 
setVibration(previousState => !previousState);
}

  return (
    <View style={styles.container1}>
            <CustomView style={styles.status}>
                <Status/>
            </CustomView>
            
            <StatusBar style="dark"/>
        <Text style={styles.baseText}>
                Налаштування
        </Text>
            <View style={styles.ImageWrapper}>
               <Image source={avatar} style={{ width: '100%', height: '100%', marginTop: '10%'}} />
            </View>
            <Text style={{marginTop:'10%' }}>Email: {userStore.auth.currentUser?.email}</Text>
      <View style={/*[styles.button1, styles.buttonOutline1]*/{top:10}}><TouchableOpacity
    onPress={() => navigation.navigate('settingsProfile')}
                    style={styles.button1}
                >

                <Text style={styles.textStale1}>Профіль</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity
    onPress={() => navigation.navigate('Feedback')}
                    style={styles.button3}
                >
                <Text style={styles.textStale}>Зворотній зв'язок</Text>
</TouchableOpacity>
<View style={{/*position: 'absolute', right: '410%', top: '20%'*/right: '65%', top:'-17%'}}><Icon /*name={'ep:chat-square'}*/icon="ep:chat-square"  size={2} color="black"style={{ fontSize: '40px' }}/>
</View>
<View>
<View
                        style={styles.ViewStale}
                    />
<View style={{/*position: 'absolute', right: '410%', top: '10%'*/right: '65%', top:'10%'}}><Icon /*name={'lucide:vibrate'}*/icon="lucide:vibrate"  size={2} color="black"style={{ fontSize: '40px' }}/>
</View>
</View>
</View>
<View>
<View style={{marginLeft: '-250%', marginTop: '-75%'}}><Text style={styles.textStalee}>Вібрація</Text></View>
          
<View style={styles.bottons}>
      <Switch
        trackColor={{ false: "#767577", true: "black" }}
        thumbColor={vibration ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleVibration}
        value={vibration}
      />
</View>
</View>
<TouchableOpacity
                //onPress={() => navigation.navigate('ВИЙТИ З ПРОФІЛЮ')}
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={/*styles.buttonText*/{color: '#e94d4d', marginTop:'-50%'}}>ВИЙТИ З ПРОФІЛЮ</Text>
            </TouchableOpacity>
</View>
  );
}
//export default Settings;



const styles = StyleSheet.create({
    container1: {
        /*flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%', 
        height: '100%',*/
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      //justifyContent: 'flex-end',
    },
    baseText: {
        //fontFamily: "Cochin",
        fontSize: 27,
        fontWeight: "700",
        //Top: '-30%',
         //marginTop: 10,
        marginRight: '41.5%',
    },
    ImageWrapper: {
        width: 140, 
        height: 140,
    },
bottons: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '-35%',
    marginLeft: '430%',
    //position: 'absolute',
  },
    button: {
        /*backgroundColor: '#0782F9',
        //heidth: '60%',*/
        //padding: '10%',
        //borderRadius: 10,
        //alignItems: 'left',
        marginTop: '30%',
    },
button3: {
        /*backgroundColor: '#0782F9',
        //heidth: '60%',*/
        //padding: '10%',
        //borderRadius: 10,
        //alignItems: 'left',
        marginTop: '40%',
        //position: 'absolute',
        //heidth: 800,
    //textAlign: 'center'
        right: '28%',
    },
    buttonText: {
        color: '#e94d4d',
        fontWeight: '400',
        fontSize: 15,
        fontFamily: "Arial",
        height: 20

    },
    
    baseText1: {
        //fontFamily: "Cochin",
        fontSize: 23,
        fontWeight: "700",
        marginTop: 130,
        marginLeft: 19,
        right: 10,
    },
    textStale: {
        /*//alignItems: 'left',
        //position: 'absolute',
        //top: '100%', left: '110%',
        top: '60%', left: '70%',
        fontSize: 21,
        fontWeight: "300",
        //fontFamily: "Arial",
        //backgroundColor: '#2AB080',*/
        //alignItems: 'center',
        //position: 'absolute',
        //top: '80%', left: '20%',
        fontSize: 20,
        fontWeight: "300",
        //fontFamily: "Arial",
    },
textStalee: {
        /*//alignItems: 'left',
        //position: 'absolute',
        //top: '100%', left: '110%',
        marginTop: '100%', left: '70%',
        fontSize: 21,
        fontWeight: "300",
        //fontFamily: "Arial",
        //backgroundColor: '#2AB080',*/
        //alignItems: 'center',
        position: 'absolute',
        top: '60%', left: '0%',
        fontSize: 20,
        fontWeight: "300",
        //fontFamily: "Arial",
    },
textStale1: {
        //alignItems: 'right',
        //position: 'absolute',
        //top: 70, left: '30%',
        fontSize: 20,
        fontWeight: "400",
        //fontFamily: "Arial",
        //backgroundColor: '#2AB080',
        color: '#2AB080'
    },
    Iconstyle: {
        position: 'absolute',
        left: 322, top: 2,
        bottom: 2,
    },
    Iconstyle1: {
        position: 'absolute',
        left: 270, top: 15,
        fontSize: 12,
        fontWeight: "600",
    },
    Iconstyle2: {
        position: 'absolute',
        left: 322, bottom: 2
    },
    ViewStale: {
        marginTop: '-6%',
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1.1,
        width: '236%',
        left: '-68%',
        position: 'absolute',
    },
container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button2: {
        height: 60,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#2AB080',
        marginTop: '35%',
        borderColor: '#2AB080',
        borderWidth: 0.5,
        marginLeft: 20,
        padding: 10,
    },
    buttonOutline: {
        backgroundColor: '#313533',
        marginTop: 5,
        borderColor: '#2AB080',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    button1: {
        height: '90%',
        width: '180%',
        borderRadius: 10,
        alignItems: 'center',
        //backgroundColor: '#313533',
        marginTop: '10%',
        borderColor: '#2AB080',
        borderWidth: 0.5,
        marginLeft: '-40%',
        padding: '10%',
    },
    buttonOutline1: {
        backgroundColor: '#313533',
        marginTop: 5,
        borderColor: '#2AB080',
        borderWidth: 2,
    },
    status: {
        marginTop: 24,
    },
    statusbar:{
        padding: 12,
        flexDirection: "row",
        marginTop: 24,
        width: 328,
        height: 48,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
    },
    online_status:{
        marginRight: 4,
    },  
    text:{
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
    },  
    item:{
        flex: 1,
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    }
})
