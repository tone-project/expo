import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DoorbellIcon = ({dark}) => {
    return(
        <Svg xmlns="http://www.w3.org/2000/svg" fill={dark?"#222624":"none"} width="32" height="32">
            <Path fill={dark?"none":"#2EC68F"} d="M13 26a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1z"/>
            <Path fill={dark?"#F2F2F2":"#222624"} fillRule="evenodd" d="M12.268 25.75H5a.75.75 0 0 1-.641-1.139l1.286-2.123a4.176 4.176 0 0 0 .605-2.164v-4.81c0-4.11 2.329-7.861 6.004-9.686a3.75 3.75 0 0 1 7.492 0 10.814 10.814 0 0 1 6.004 9.685v4.81c0 .764.21 1.512.605 2.165l1.286 2.123A.75.75 0 0 1 27 25.75h-7.268c.012.082.018.165.018.25v1A2.75 2.75 0 0 1 17 29.75h-2A2.75 2.75 0 0 1 12.25 27v-1c0-.085.006-.168.018-.25zM13.75 6a2.25 2.25 0 0 1 4.5 0v.06c0 .434.248.83.64 1.02l.1.048a9.314 9.314 0 0 1 5.26 8.385v4.81c0 1.038.284 2.055.822 2.942l.597.985H6.332l.596-.985a5.675 5.675 0 0 0 .822-2.941v-4.81a9.314 9.314 0 0 1 5.26-8.386l.1-.048c.392-.19.64-.586.64-1.02V6zM14 25.75a.25.25 0 0 0-.25.25v1c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-1a.25.25 0 0 0-.25-.25h-4z" clipRule="evenodd"/>
        </Svg>
    )
}

export default DoorbellIcon;