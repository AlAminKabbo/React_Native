/* eslint-disable prettier/prettier */
import React,{useState} from 'react';

import {View, Text,Button} from 'react-native';

function App() {
  const [name,setName] = useState('Kabbo');
  return (
    <View>
    {
      name ? <Text>{name}</Text> : <Text>No Data</Text>
    }
      <Button
        title="Change text"
        onPress={()=>{
          setName('Maruf');
        }}
      />
    </View>
  );
}
export default App;
