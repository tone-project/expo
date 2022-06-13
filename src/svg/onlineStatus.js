import React from "react";
import Svg, {Circle} from 'react-native-svg';

const OnlineStatus = ({online}) => {
    return(
        <Svg height="6" width="6"  viewBox="0 0 6 6">
            <Circle cx="3" cy="3" r='3' fill={online ? '#2EC68F' :  '#EF5B5B' } />
        </Svg>
    )
}

export default OnlineStatus