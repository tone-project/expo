import React from 'react';
import Svg, {Rect} from 'react-native-svg';

const Sliders = ({lighten})  => {
    return(
        <Svg>
            <Rect x="0" y="0" rx='1' width="32" height="2" fill= {lighten === 1 ? "#2dc58e" : "#2b4c41"}/>
            <Rect x="40" y="0" rx='1' width="32" height="2" fill={lighten === 2 ? "#2dc58e" : "#2b4c41"}/>
            <Rect x="80" y="0" rx='1' width="32" height="2" fill={lighten === 3 ? "#2dc58e" : "#2b4c41"}/>
            <Rect x="120" y="0" rx='1' width="32" height="2" fill={lighten === 4 ? "#2dc58e" : "#2b4c41"}/>
        </Svg>
    )
}

export default Sliders