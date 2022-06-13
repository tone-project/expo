import React from 'react';
import Svg, {Path} from 'react-native-svg';

const NoIcon = () => {
    return(  
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
            <Path fill="#2AB080" d="M9.53 8.47a.75.75 0 0 0-1.06 1.06L10.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 13.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L13.06 12l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 10.94 9.53 8.47z"/>
            <Path fill="#2AB080" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25zM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0z" clipRule="evenodd"/>
        </Svg>
    )
}

export default NoIcon;