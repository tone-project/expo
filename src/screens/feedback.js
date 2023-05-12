import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const feedback = () => {
  const [text, setText] = useState('');
  return (
<View style={{backgroundColor: 'white',
        width: '100%', 
        height: '100%',}}>
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
</View>
  );
}

export default feedback;
