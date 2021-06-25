/* eslint-disable prettier/prettier */
import React,{useState} from 'react';

import {View, Text,Button,Image} from 'react-native';

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
      <Image source={require('./ImagePack/Kabbo.png')}/>
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'}}
        style={{height:300, width:250}}
      />
    </View>
  );
}
export default App;
