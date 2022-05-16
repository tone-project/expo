import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MicrowaveIcon = ({dark}) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" fill={dark?"#F2F2F2":"none"} width="32" height="32">
            <Path fill={dark?"none":"#2EC68F"} d="M7 12a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M8 10.25A1.75 1.75 0 0 0 6.25 12v6c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 17.75 18v-6A1.75 1.75 0 0 0 16 10.25H8zM7.75 12a.25.25 0 0 1 .25-.25h8a.25.25 0 0 1 .25.25v6a.25.25 0 0 1-.25.25H8a.25.25 0 0 1-.25-.25v-6zM23 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} d="M21 10.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M5 6.25A2.75 2.75 0 0 0 2.25 9v12A2.75 2.75 0 0 0 5 23.75h22A2.75 2.75 0 0 0 29.75 21V9A2.75 2.75 0 0 0 27 6.25H5zM3.75 9c0-.69.56-1.25 1.25-1.25h22c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25V9z" clipRule="evenodd"/>
        </Svg>
    )
}

export default MicrowaveIcon;