import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Image, CancelButton } from 'react-native'
import auth from '../components/firebase';
import { NavigationContainer, StackActions, NavigationContext, } from '@react-navigation/native';
// import avatar from '../../assets/avatar.png'
import avatar from '../../assets/avatar.png'
import CustomView from '../components/customView';
import Status from '../components/status';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons'

function Settings({navigation}) {
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
               <Image source={avatar} style={{ width: '100%', height: '100%', marginTop: '20%'}} />
            </View>
            <Text style={{marginTop:'15%' }}>Email: {auth.currentUser?.email}</Text>
      <View style={/*[styles.button1, styles.buttonOutline1]*/{top:10}}><TouchableOpacity
            onPress={() => navigation.navigate('1')}
                    style={styles.button1}
                >

                <Text style={styles.textStale1}>Профіль</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity
    onPress={() => navigation.navigate('1')}
                    style={styles.button3}
                >
                <Text style={styles.textStale}>Зворотній зв'язок</Text>
</TouchableOpacity>
<View style={{/*position: 'absolute', right: '410%', top: '20%'*/right: '65%', top:'-25%'}}><Icon name={'ios-chatbubbles-outline'} size={40} color="black"/>
</View>
</View>
            
<TouchableOpacity
                onPress={() => navigation.navigate('ВИЙТИ З ПРОФІЛЮ')}
                style={styles.button}
            >
                <Text style={/*styles.buttonText*/{color: '#e94d4d',}}>ВИЙТИ З ПРОФІЛЮ</Text>
            </TouchableOpacity>
    </View>
  );
}
export default Settings;



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
        width: 112, 
        height: 112,
    },
    button: {
        /*backgroundColor: '#0782F9',
        //heidth: '60%',*/
        //padding: '10%',
        //borderRadius: 10,
        //alignItems: 'left',
        marginTop: '28%',
        //position: 'absolute',
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
        right: '20%',
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
        top: '70%', left: '100%',
        fontSize: 20,
        fontWeight: "300",
        //fontFamily: "Arial",
        //backgroundColor: '#2AB080',*/
        alignItems: 'center',
        //position: 'absolute',
        //top: '80%', left: '20%',
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
        marginTop: 80,
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 1.1,
        width: '220%',
        left: '1%'
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
    }
})
