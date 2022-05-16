import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RoosterIcon = ({dark}) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/Svg" fill={dark?"#222624":"none"} width="32" height="32">
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M15.75 6.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zm1.75-3.25a3.25 3.25 0 0 0 0 6.5h.036A4.733 4.733 0 0 0 16.25 13v3.261a2.791 2.791 0 0 0-.25-.011h-3a6.72 6.72 0 0 0-3.178.793A5.995 5.995 0 0 0 4.75 14.25a2.5 2.5 0 0 0-2.5 2.5V19A2.75 2.75 0 0 0 5 21.75h1.366A6.788 6.788 0 0 0 6.25 23v1c0 .966.784 1.75 1.75 1.75h.309c.36 2.267 2.323 4 4.691 4h6A6.75 6.75 0 0 0 25.75 23v-6.25h1.5a1.5 1.5 0 0 0 1.5-1.5 3 3 0 0 0-3-3h-.059a4.717 4.717 0 0 0-.52-1.524 2.25 2.25 0 1 0-.487-4.324 2.75 2.75 0 0 0-4.388-1.56A3.248 3.248 0 0 0 17.5 3.25zm-7.663 22.5A3.251 3.251 0 0 0 13 28.25h6c2.9 0 5.25-2.35 5.25-5.25v-2.25h-5.5V23A2.75 2.75 0 0 1 16 25.75H9.837zm8.913-6.5h5.5V13a3.25 3.25 0 0 0-6.5 0v3.879c.61.504 1 1.267 1 2.121v.25zm-11.916 1a6.771 6.771 0 0 1 1.75-2.356A4.497 4.497 0 0 0 4.75 15.75a1 1 0 0 0-1 1V19c0 .69.56 1.25 1.25 1.25h1.834zm20.416-5h-1.5v-1.5a1.5 1.5 0 0 1 1.5 1.5zM22 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm2.75 2.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0zM23 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clipRule="evenodd"/>
            <Path fill={dark?"#222624":"#2EC68F"} fillRule="evenodd" d="M7.75 23c0-2.9 2.35-5.25 5.25-5.25h3c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25H8a.25.25 0 0 1-.25-.25v-1z" clipRule="evenodd"/>
        </Svg>
    )
}

export default RoosterIcon;