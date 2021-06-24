/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text} from 'react-native';

function App() {
  let name = "";
  return (
    <View>
    {
      name ? <Text>{name}</Text> : <Text>No Data</Text>
    }
    </View>
  );
}
export default App;
