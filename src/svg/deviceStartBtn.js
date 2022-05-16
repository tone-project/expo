import React from 'react';
import Svg, {Circle, Rect} from 'react-native-svg';

const SvgButton = (props) => {
  return (
    <Svg height="100%" width="100%"  viewBox="0 0 64 64" {...props}>
      <Circle cx="32" cy="32" r="31" strokeWidth="1" stroke="#FFFFFF"  fill="transparent" />
      <Circle cx="32" cy="32" r="21" fill="#FFFFFF" />
      <Rect x="23" y="23" rx="4" ry="4" width="18" height="18" borderRadius ='5' fill="#1A1A1A" />  
    </Svg>
  );
}

export default SvgButton