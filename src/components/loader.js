import React, { useRef } from 'react'
import Svg, { Circle } from 'react-native-svg';
import {View, Animated, Easing} from "react-native";


const Loader = () => {
    const spinValue = useRef(new Animated.Value(0)).current

    Animated.loop(
        Animated.sequence([
            Animated.timing(spinValue, {
                toValue: 100,
                duration: 0,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
            Animated.timing(spinValue, {
                toValue: 200,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ])
    ).start();

const spin = spinValue.interpolate({
    inputRange: [100, 200],
    outputRange: ['0deg', '360deg']
  })

    return(
        <View 
            style = {{
                with: 96,
                height: 96,
                borderRadius: 48,
                borderWidth: 12,
                borderColor: "#2b4c41",
                backgroundColor: 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
            }}   
        >
            <Animated.View 
                style={{
                    transform: [{rotate: spin}],
                    position: 'absolute', 
                    width: 96, 
                    height: 96
                }}
            >
                    <Svg height="96" width="96" viewBox='0 0 96 96'>
                        <Circle
                            cx = '48'
                            cy = '48'
                            r = '42'
                            stroke = '#2dc58e'
                            strokeWidth = '12'
                            strokeDasharray = "66,198"
                            strokeDashoffset = '66' 
                            strokeLinecap="round"
                            fill= "none"
                        />
                    </Svg>         
            </Animated.View >
        </View> 
    )
}

export default Loader