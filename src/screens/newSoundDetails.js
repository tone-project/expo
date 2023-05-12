import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableHighlight,TouchableWithoutFeedback, Keyboard} from 'react-native';
import { CommonActions } from '@react-navigation/native'

import ProbabilityBar from '../components/probabilityBar';
import ModalPiker from '../components/modalPiker';
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/input";
import DropDown from "../svg/icons/dropDown";
import CustomButton from "../components/customButton";
import CustomView from "../components/customView"


const SoundDetail = ({navigation}) => {

    const [name, onChangeName] = useState('sad');
    const [selectedValue, setSelectedValue] = useState({icon: null, description: 'Виберіть категорію'});
    const [modalVisibility, changeModalVisibility] = useState(false)
    
        const handleButton = () => {
            navigation.getParent().dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {name: 'NavBar'},
                    ],
                })
            )
        }

    return(
        <TouchableWithoutFeedback 
            onPress={Keyboard.dismiss}  
        > 
            <SafeAreaView style={styles.container} keyboardShouldPersistTaps={false}>
                <StatusBar style="light" />
                <CustomView>
                    <ProbabilityBar probabilityValue={66} dark disabledYesBtn/>
                        <View style={styles.soundsDetails}>
                            <View style={styles.textWrapper}>
                                <Text style={styles.title}>Деталі звуку</Text>
                            </View>
                            <View style={styles.soundsOptions}>
                                <Input
                                    style={styles.nameInput}   
                                    placeholder='Введіть назву' 
                                    label='Назва'
                                    value={name}
                                    onChangeValue={(text) => onChangeName(text)}
                                />
                                <View style={styles.modal}>
                                    <Text style={styles.label}>Категорія</Text>
                                    <TouchableHighlight 
                                        style={styles.touchableHighlight}
                                        underlayColor="#313533"
                                        onPress={() => changeModalVisibility(true)}
                                    >
                                        <View style={styles.modalPiker}>
                                            <View style={styles.option}>
                                                {selectedValue.icon && <View style={styles.icon}>{selectedValue.icon}</View>}
                                                <Text style={styles.modalPikerText}>{selectedValue.description}</Text>
                                            </View>
                                                <DropDown/>
                                        </View>
                                    </TouchableHighlight>
                                    <Modal
                                        transparent={true}
                                        animationType='fade'
                                        visible={modalVisibility}
                                        nRequestClose={()=> changeModalVisibility(false)}
                                    >
                                        <ModalPiker 
                                            changeModalVisibility={changeModalVisibility}
                                            setSelectedValue={setSelectedValue}
                                        />
                                    </Modal>
                                </View>
                            </View>
                        </View>
                        <CustomButton
                            style={styles.button}
                            underlayColor="#2AB080" 
                            onPress={handleButton}
                            value={'Зберегти звук'}
                        />
                    </CustomView>
                </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SoundDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    soundsDetails: {
        width: "100%",
        maxHeight: 233,
        marginBottom: 40,
        marginTop: 20,
    },
    textWrapper : {
        // flex: 1,
        // width: '100%',
        // height: 'auto',
    },
    title: {
        fontFamily: 'Inter_400Regular',
        color: '#7A7D7C',
        fontSize: 18,
        lineHeight: 24,
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    soundsOptions: {
        flex: 1,
        height: 196,
        backgroundColor: '#313533',
        borderRadius: 12,
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    label: {
        fontFamily: 'Inter_400Regular',
        color: '#7A7D7C',
        fontSize: 12,
        lineHeight: 16,
        alignItems: 'flex-start',
        marginBottom: 4,
        marginLeft: 12,
    },
    
    nameInput: {
        width: '100%',
        // width: metrix.x,
        height: 56,
        flex: 1,
    },
    touchableHighlight: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7A7D7C',
    },
    modalPiker: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        // width: metrix.x,
        height: 56,
        paddingHorizontal: 18,
        paddingVertical: 14, 
        lineHeight: 20,
        borderColor: '#7A7D7C',
    },
    option: {
        alignItems: 'center',
        flexDirection: 'row',  
        flexDirection: 'row',
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 9,
    },
    modalPikerText: {
        fontFamily: 'Inter_400Regular',
        color: '#F2F2F2',
        fontSize: 15,
    },
    modal: {
        // flex: 1,
    }, 
    dropDown: {
        width: 24,
        height: 24,
    },
    button: {
        height: 56,
        width: 328,
        backgroundColor: '#2EC68F',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontFamily: 'Inter_600SemiBold',
        fontSize: 15,
        lineHeight: 20,
    }
})