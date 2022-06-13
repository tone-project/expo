import React from 'react';
import Svg, {Path} from 'react-native-Svg';

const FridgeIcon = ({dark}) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/Svg" fill={dark?"#222624":"none"} width="32" height="32">
            <Path fill={dark?"none":"#2EC68F"} d="M12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 14a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M12 13.25A1.75 1.75 0 0 0 10.25 15v4a1.75 1.75 0 1 0 3.5 0v-4A1.75 1.75 0 0 0 12 13.25zM11.75 15a.25.25 0 1 1 .5 0v4a.25.25 0 1 1-.5 0v-4zM10.25 7a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zM12 6.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5z" clipRule="evenodd"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M7.25 4A2.75 2.75 0 0 1 10 1.25h12A2.75 2.75 0 0 1 24.75 4v24c0 .45-.108.875-.3 1.25H27a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2.55c-.192-.375-.3-.8-.3-1.25V4zM10 29.25h12c.69 0 1.25-.56 1.25-1.25V11.75H8.75V28c0 .69.56 1.25 1.25 1.25zM23.25 4v6.25H8.75V4c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25z" clipRule="evenodd"/>
        </Svg>
    )
}

export default FridgeIcon;