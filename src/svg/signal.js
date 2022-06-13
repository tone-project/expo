import React from "react";
import Svg, {Rect, Circle} from 'react-native-svg';

const Signal = ({signalLevel}) => {
    let fill = ['#2EC68F', '#2EC68F', '#2EC68F', '#2EC68F', '#2EC68F'];

    fill = fill.map((current, index) => {
        if(index >= signalLevel)
            current = 'rgba(46, 198, 143, 0.25)'
        return current;
    })
    return(
        <Svg height='20' width='36' viewBox=' 0 0 36 20'>  
            <Circle cx = '2' cy = '18' r ='2' fill={fill[0]}/>
            <Rect  x = '8' y = '12' ry='2' height = '8' width='4'  fill={fill[1]}/>
            <Rect  x = '16' y = '8' ry='2' height = '12' width='4'  fill={fill[2]}/>
            <Rect  x = '24' y = '4' ry='2' height = '16' width='4'  fill={fill[3]}/>
            <Rect  x = '32' y = '0' ry='2' height = '20' width='4'  fill={fill[4]}/>
        </Svg>
    )
}

export default Signal