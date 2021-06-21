import React from 'react';
import {Button, Text, View} from 'react-native';

const ButtonScreen = () => {
  return (
    <View>
      <Text>Button</Text>
      <Button title="Submit" onPress={() => alert("Click")}/>
    </View>
  );
};
export default ButtonScreen;
