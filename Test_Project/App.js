// /* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, TextInput} from 'react-native';

function App() {
  const [Itext, setItext] = useState('');
  console.log(Itext);
  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        onChangeText={text => setItext(text)}
      />
    </View>
  );
}
export default App;
