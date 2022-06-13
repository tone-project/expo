import React from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

const UselessTextInput = (props) => {
  return (
<View style={{backgroundColor: 'white',
        width: '100%', 
        height: '100%',}}>
    <TextInput
      style={{height: 200, borderColor: 'black',
        borderWidth: 0.5, borderRadius: 10,}}
      {...props} 
      maxLength={800}
    />
</View>
  );
}


const feedback = () => {
  const [value, onChangeText] = React.useState(' Напишіть відгук про нашу програму');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  
  return (
<View style={{backgroundColor: 'white',
        width: '100%', 
        height: '100%',}}>
 <View style={{ marginTop: '2%', }}>
    <View
      style={{
        //backgroundColor: value,
        //borderBottomColor: '#000000',
        //borderBottomWidth: 1,
        
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10,borderColor: 'black',
        borderWidth: 0.5, borderRadius: 10,
        height: 200,}}
      />
<Button
          title={"Відгукнутись"}
          onPress={() => Alert.alert("Дякуєм за ваш відгук!:)")}
          />
</View>
    </View>
</View>
  );
}




export default feedback;