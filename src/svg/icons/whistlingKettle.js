import React from 'react';
import Svg, {Path} from 'react-native-svg';

const WhistlingKettleIcon = ({dark}) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" fill={dark?"#222624":"none"} width="32" height="32">
            <Path fill={dark?"none":"#2EC68F"} d="M23.696 22.89l3.597-3.597a1 1 0 0 0 0-1.414l-1.415-1.415a1 1 0 0 0-1.414 0l-2.23 2.23a9.94 9.94 0 0 1 1.462 4.196z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M13.757 6.25a8.75 8.75 0 0 1 8.75 8.75v2.361l1.427-1.427a1.75 1.75 0 0 1 2.475 0l1.414 1.414a1.75 1.75 0 0 1 0 2.475l-3.347 3.348c.02.273.031.55.031.829v4a.75.75 0 0 1-.75.75h-20a.75.75 0 0 1-.75-.75v-4c0-2.33.741-4.486 2-6.246V15a8.75 8.75 0 0 1 8.75-8.75zm-7.25 9.813a10.711 10.711 0 0 1 7.25-2.813c2.794 0 5.339 1.066 7.25 2.813V15a7.25 7.25 0 1 0-14.5 0v1.063zm16.669 2.75c.435.79.775 1.64 1.002 2.535l2.585-2.585a.25.25 0 0 0 0-.354l-1.415-1.414a.25.25 0 0 0-.353 0l-1.82 1.819zM23.007 24a9.25 9.25 0 1 0-18.5 0v3.25h18.5V24z" clipRule="evenodd"/>
        </Svg>
    )
}

export default WhistlingKettleIcon;