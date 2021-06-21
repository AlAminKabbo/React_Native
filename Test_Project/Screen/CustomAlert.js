/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Alert, View} from 'react-native';

const ButtonScreen = () => {
  return (
    <View>
      <Button
        title="Submit"
        onPress={() =>
          Alert.alert(
            'Are you agree with us?',
            'If you agree then we can control your phone anytime.',[
                {text:'Yes' , onPress:()=> console.log('YES') },
                {text:'No'},
            ]
          )
        }
      />
    </View>
  );
};
export default ButtonScreen;
