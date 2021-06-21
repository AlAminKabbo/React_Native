import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Profile = ({name, phoneNumber}) => {
  return (
    <View style={styles.myView}>
      <Text>{name}</Text>
      <Text>{phoneNumber}</Text>
    </View>
  );
};

function App() {
  return (
    <View>
      <Profile name="Al Amin" phoneNumber="01728861499" />
      <Profile name="Nitish" phoneNumber="01700000000" />
      <Profile name="Maruf" phoneNumber="01911111111" />
    </View>
  );
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'cyan',
    padding: 20,
    margin: 5,
  },
});
export default App;
