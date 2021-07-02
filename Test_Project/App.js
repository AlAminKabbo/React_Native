// /* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ButtonScreen from './Screen/ButtonScreen';
import ImageScreen from './Screen/ImageScreen';

const Stack = createNativeStackNavigator();

const Navigating = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ButtonScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Image" component={ImageScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return <NavigationContainer>{Navigating()}</NavigationContainer>;
};
export default App;
