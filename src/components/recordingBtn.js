import React, { useEffect, useRef } from 'react';
import Svg, {Circle, Path,G, Filter, FeColorMatrix, Defs} from 'react-native-svg';
import {View, Animated, Image} from "react-native";

const RecordingBtn = ({recording}) => {
    const value = useRef(new Animated.Value(0)).current;
    const resizeBtnAnimation = useRef(new Animated.Value(0)).current;
    const rotateAnimation = useRef(new Animated.Value(0)).current;

    const animationDuration = 2000;
    const hidenAnimationDuration = 1;

    useEffect(() => {
        if(recording){
            Animated.spring( resizeBtnAnimation, { toValue: 100, friction: 3,useNativeDriver: true }).start(
            Animated.loop(
                Animated.sequence([
                    Animated.timing(value, {
                        toValue: 100,
                        duration: animationDuration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(value, {
                        toValue: 0,
                        duration: hidenAnimationDuration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(rotateAnimation, {
                        toValue: 100,
                        duration: hidenAnimationDuration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(value, {
                        toValue: 100,
                        duration: animationDuration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(value, {
                        toValue: 0,
                        duration: hidenAnimationDuration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(rotateAnimation, {
                        toValue: 0,
                        duration: hidenAnimationDuration,
                        useNativeDriver: true,
                    }),
                ])
            ).start())
        }
    }, [recording])

    const scaleBtn = resizeBtnAnimation.interpolate({inputRange: [0, 100], outputRange: [1,0.69]})
    const scale = value.interpolate({ inputRange: [0, 100], outputRange: [0,1] })

    const opacity30 = value.interpolate({ inputRange: [0, 100], outputRange: [0.3,0] })
    const opacity20 = value.interpolate({ inputRange: [0, 100], outputRange: [0.2,0] })

    const rotateFade1 = rotateAnimation.interpolate({inputRange: [0, 100], outputRange: ['0deg', '290deg'] })
    const rotateFade2 = rotateAnimation.interpolate({inputRange: [0, 100], outputRange: ['180deg', '270deg'] })
    const rotateFade3 = rotateAnimation.interpolate({inputRange: [0, 100], outputRange: ['100deg' , '170deg'] })
    
    return(
        <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Animated.View 
                style={{
                    position: 'absolute',
                    zIndex: 3,
                    width: 208, 
                    height: 208, 
                    transform: [{rotate: rotateFade1 }, {scale}], 
                    opacity: opacity30,
                }}
            >
                {/* Fade-1 */}
                <Svg width='208' height='208'>
                    <Circle 
                        r = '89'
                        cx = '104' cy = '104' 
                        stroke = '#2EC68F'
                        fill = 'none'
                        strokeWidth = '32'
                        strokeDasharray = "559.2" 
                        strokeDashoffset = '139.8'
                    /> 
                </Svg>
            </Animated.View>
            <Animated.View 
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    width: 264, 
                    height: 264, 
                    transform: [{rotate: rotateFade2 }, {scale}], 
                    opacity: opacity20, 
                }}
            >
                {/* Fade-2 */}
                <Svg width='264' height = '264'>
                    <Circle 
                        r = '103'
                        cx = '132' cy = '132' 
                        stroke = '#2EC68F'
                        fill = 'none'
                        strokeWidth = '58'
                        strokeDasharray = "647.16" 
                        strokeDashoffset = '431.4'
                    />
                </Svg>
            </Animated.View>
            <Animated.View 
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    width: 312, 
                    height: 312, 
                    transform: [{rotate: rotateFade3}, {scale}],
                    opacity: opacity30 ,
                }}
            >
                {/* Fade-3 */}
                <Svg width = '312' height = '312'>
                    <Circle 
                        r = '115'
                        cx = '156' cy = '156'
                        fill='none'
                        stroke = '#2EC68F'
                        strokeWidth = '82'
                        strokeDasharray = "722.56" 
                        strokeDashoffset = '481.71'
                    />
                </Svg>
            </Animated.View>
            <Animated.View 
                style={{
                    position: 'absolute', 
                    zIndex: 10,
                    width: 214, 
                    height: 214, 
                    transform: [{  scale: scaleBtn }],
                }}
            >
                <Image
                    source={require('../../assets/recording.png')}
                    style={{
                        width: '100%',
                        height: '100%',}}
                />
            </Animated.View>
        </View>
    )
}

export default RecordingBtn;