import React from 'react';
import Svg, {Path} from 'react-native-svg';

const YesIcon = () => {
    return(
        <Svg xmlns="http://www.w3.org/2000/Svg" fill="none" width="24" height="24">
            <Path fill="#2AB080" d="M18.03 9.03a.75.75 0 0 0-1.06-1.06l-6.47 6.47-2.97-2.97a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l7-7z"/>
            <Path fill="#2AB080" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0z" clipRule="evenodd"/>
        </Svg>
    )
}

export default YesIcon;