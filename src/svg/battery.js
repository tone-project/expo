import React from "react";
import Svg, {Rect, Path} from 'react-native-svg';
const Battery = ({capacity}) => {
    // rgba(46, 198, 143, 0.25)
    // let [batteryStroke, batteryFill] = ['#2EC68F', 'None']
    // #EF5B5B'rgba(239,91,91, 0.6)' 
    let batteryFill = capacity >= 90 ? batteryStroke = 'rgba(46, 198, 143, 0.4)' : 'None';
    let batteryStroke = capacity <= 25 ? batteryStroke =  '#EF5B5B' : '#2EC68F';
    return(
        <Svg width='20' height='10' >
            {
                capacity <= 10 ? 
                    <></> :
                capacity <= 25 ? 
                    <Rect x = '14' y='0' rx='3' tr='1' width='6' height='9' fill='rgba(239,91,91, 0.6)'  /> :
                capacity <= 45 ? 
                    <Rect x = '12' y='0' rx='3' tr='1' width='8' height='9' fill='rgba(46, 198, 143, 0.4)'   /> :
                capacity <= 65 ?
                    <Rect x = '8' y='0' rx='3' tr='1' width='12' height='9' fill='rgba(46, 198, 143, 0.4)'  /> :
                capacity < 90 ? 
                    <Rect x = '3.5' y='0' rx='3' tr='1' width='16.5' height='9' fill='rgba(46, 198, 143, 0.4)' /> :
                    <></>
            }
            <Path c
                d = 'M0.5,5.5 L0.5,3.5 C0.5,3.5 0.5,2.5 1.5,2.5 C1.5,2.5 2.5,2.5 2.5,1.5 C2.5,1.5 2.5,0.5 3.5,0.5 L17.5,0.5 C17.5,0.5 19.5,0.5 19.5,2.5 L19.5 6.5 C19.5,6.5 19.5,8.5 17.5,8.5 L3.5,8.5 C3.5,8.5 2.5,8.5, 2.5,7.5 C2.5,7.5 2.5,6.5 1.5,6.5 C1.5,6.5 0.5,6.5 0.5,5.5'
                fill = {batteryFill}
                stroke = {batteryStroke}
                strokeWidth = '1'
            />
        </Svg>
    )
}

export default Battery; 