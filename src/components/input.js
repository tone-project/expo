import React, { useState,useEffect } from "react";
import {StyleSheet, View, Text, TextInput,TouchableOpacity} from "react-native";

import DeleteTexIcon from "../svg/icons/deleteText";
import ErrorIcon from "../svg/icons/error";

const Input = ({
        placeholder, 
        value, 
        onChangeValue, 
        label, 
        checkValue,
        beingChecked,
    }) => {
    const [error, setError] = useState(false)
    const [focused, setFocused] = useState(false)

    const changeText = (text) => {
        // console.log('beingChecked: ', beingChecked);
        // console.log('checkValue: ', checkValue);
        onChangeValue(text);
        if(beingChecked){
            if(checkValue.exec(value)){
                setError(false);
            }else {
                setError(true);
            }
        }else {
            setError(false)
        }
    }

    useEffect(() => console.log('input render'), []);
    useEffect(() => console.log('input beingChecked'), [beingChecked]);

    return(
        <View style={styles.TextInputContainer}>
            <Text 
                style={[styles.label, error && {color: '#EF5B5B'}, focused && {color: '#2AB080'}]}
                pointerEvents = 'none'
            >
                {label}
            </Text>
            <View style={[styles.TextInputWrapper,error && {borderColor: '#EF5B5B'}, focused && {borderColor: '#2AB080'}]}>
                <TextInput 
                    underlineColorAndroid='transparent'
                    style={styles.input} 
                    placeholder={placeholder}
                    placeholderTextColor='#7A7D7C'
                    value={value} 
                    onChangeText={changeText}
                    autoComplete={false}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    selectionColor='#F2F2F2'
                />
                {
                    focused &&
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => onChangeValue('')}
                        >
                            <DeleteTexIcon/>
                        </TouchableOpacity>
                    || error && 
                        <ErrorIcon/>
                }
            </View>
            {error && <Text 
                style={styles.errorMessage}
                pointerEvents = 'none'
            >
                Невірний формат пошти. Спробуйте ще раз
            </Text>}
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    TextInputContainer: {
        marginBottom: 19,
    },
    label: {
        fontFamily: 'Inter_400Regular',
        color: '#7A7D7C',
        fontSize: 12,
        lineHeight: 16,
        alignItems: 'flex-start',
        marginLeft: 12,
        marginBottom: 4,
    },
    TextInputWrapper: {
        paddingHorizontal: 12,
        paddingVertical: 18, 
        height: 56,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#7A7D7C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Inter_400Regular',
        backgroundColor: 'transparent',
        color: '#F2F2F2',
        fontSize: 15,
        lineHeight: 20,
        flex: 1,
    },
    focused:{
        color: '#EF5B5B',
    },
    errorMessage: {
        position: 'absolute',
        top: 80,
        fontFamily: 'Inter_400Regular',
        color: '#EF5B5B',
        fontSize: 12,
        lineHeight: 16,
        marginLeft: 12,
    }
})