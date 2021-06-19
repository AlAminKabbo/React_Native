/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const ImageScreen = () => {
  return (
    <View>
      <Text>ofline Image</Text>
      <TouchableOpacity>
        <Image source={require('../ImagePack/Kabbo.png')} />
      </TouchableOpacity>

      <Text>Online Image</Text>
      <Image
        blurRadius={10}
        source={{
          height: 200,
          width: 300,
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        }}
      />
      <Image />
    </View>
  );
};

export default ImageScreen;
