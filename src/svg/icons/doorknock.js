import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DoorKnockIcon = ({dark}) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" fill={dark?"#F2F2F2":"none"} width="32" height="32">
            <Path fill={dark?"none":"#2EC68F"} d="M23 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M21 13.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM19.75 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M5.25 4A2.75 2.75 0 0 1 8 1.25h16A2.75 2.75 0 0 1 26.75 4v25.25H29a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h2.25V4zm20 0v25.25H6.75V4c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25z" clipRule="evenodd"/>
        </Svg>
    )
}

export default DoorKnockIcon;