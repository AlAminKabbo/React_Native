/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text,FlatList} from 'react-native';

function App() {
  const student = [
    {roll: '1', name:'Kabbo'},
    {roll: '5', name:'Nitish'},
    {roll: '23', name:'Kabbo'},
  ];
  return (
    <View>
      <FlatList
        data={student}
        renderItem={({item})=>{
          return <Text >{item.name}</Text>;
        }}
        keyExtractor={(item)=>item.roll}
      />
    </View>
  );
}
export default App;
