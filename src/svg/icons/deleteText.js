import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DeleteText = () => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
            <Path fill="#C7C7C7" fillRule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.53 8.47a.75.75 0 0 0-1.06 1.06L10.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 13.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L13.06 12l2.47-2.47a.75.75 0 0 0-1.06-1.06L12 10.94 9.53 8.47z" clipRule="evenodd"/>
        </Svg>
    )
}

export default DeleteText;