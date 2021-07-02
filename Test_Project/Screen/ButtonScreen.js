import React from 'react';
import {Button, Text, View} from 'react-native';

const ButtonScreen = ({navigation}) => {
  return (
    <View>
      <Text>Button</Text>
      <Button title="Submit" onPress={() => navigation.navigate('Image')}/>
    </View>
  );
};
export default ButtonScreen;
