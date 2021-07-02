import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    name: 'Joy Krishno Sing',
    roll: 'Roll : 01',
    img: require('../D51/image/r1-min.jpg'),
  },
  {
    name: 'Hamze Ahmed Abdlaahe',
    roll: 'Roll : 02',
    img: require('../D51/image/r2-min.jpg'),
  },
  {
    name: 'Nitish Biswas',
    roll: 'Roll : 05',
    img: require('../D51/image/r5-min.jpg'),
  },
  {
    name: 'Sarreha Tasmin Rikta',
    roll: 'Roll : 06',
    img: require('../D51/image/r6-min.jpg'),
  },
  {
    name: 'Addiqadir Muse Abdilahi',
    roll: 'Roll : 07',
    img: require('../D51/image/r7-min.jpg'),
  },
  {
    name: 'Ayonti Joanna Gathia',
    roll: 'Roll : 09',
    img: require('../D51/image/r9-min.jpg'),
  },
  {
    name: 'Md. Abu Musha',
    roll: 'Roll: 10',
    img: require('../D51/image/r10-min.jpg'),
  },
  {
    name: 'Nazmul Hossain Nahid',
    roll: 'Roll : 11',
    img: require('../D51/image/r11-min.jpg'),
  },
  {
    name: 'Md. Nahid Hossen',
    roll: 'Roll : 13',
    img: require('../D51/image/r13-min.jpg'),
  },
  {
    name: 'Adan Diriye Roble',
    roll: 'Roll : 14',
    img: require('../D51/image/r14-min.jpg'),
  },
  {
    name: 'Atiqur Rahman Atiq',
    roll: 'Roll : 16',
    img: require('../D51/image/r16-min.jpg'),
  },
  {
    name: 'Imran Nur Hirey',
    roll: 'Roll : 17',
    img: require('../D51/image/r17-min.jpg'),
  },
  {
    name: 'Robiul Hossain Mollah',
    roll: 'Roll : 18',
    img: require('../D51/image/r18-min.jpg'),
  },
  {
    name: 'Shafie Ahmed Roble',
    roll: 'Roll : 19',
    img: require('../D51/image/r19-min.jpg'),
  },
  {
    name: 'Al Maruf Hossain Nasim',
    roll: 'Roll : 21',
    img: require('../D51/image/r21-min.jpg'),
  },
  {
    name: 'Al Amin Kabbo',
    roll: 'Roll : 23',
    img: require('../D51/image/Kabbo.png'),
  },
  {
    name: 'Shafie Abdirahman Rage',
    roll: 'Roll : 25',
    img: require('../D51/image/r25.jpg'),
  },
  {
    name: 'Abdullahi Mohamed Hilowle',
    roll: 'Roll : 28',
    img: require('../D51/image/r28-min.jpg'),
  },
  {
    name: 'Mohamednur Abshir',
    roll: 'Roll : 29',
    img: require('../D51/image/r29-min.jpg'),
  },
  {
    name: 'Abdifitah Abdi Warsame',
    roll: 'Roll : 31',
    img: require('../D51/image/r31-min.jpg'),
  },
  {
    name: 'Md. Mehedi Hasan Ullah',
    roll: 'Roll : 33',
    img: require('../D51/image/r33-min.jpg'),
  },
  {
    name: 'Abdimajid Mohamed',
    roll: 'Roll : 34',
    img: require('../D51/image/r34-min.jpg'),
  },
  {
    name: 'Md. Hassan Reza',
    roll: 'Roll : 37',
    img: require('../D51/image/r37-min.jpg'),
  },
  {
    name: 'Pro Yuusuf Diiriye Jaanbiir',
    roll: 'Roll : 39',
    img: require('../D51/image/r39-min.jpg'),
  },
  {
    name: 'KKM Anas',
    roll: 'Roll : 40',
    img: require('../D51/image/r40-min.jpg'),
  },
];

const Item = ({title, roll, img}) => (
  <TouchableOpacity onPress={()=> alert(roll)}>
    <View style={styles.item}>
    <View style={styles.imbStyle}>
    <Image style={styles.img} source={img} />
    </View>
    <View>
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.roll}>{roll}</Text>
    </View>
  </View>
  </TouchableOpacity>
);

const App = () => {
  const renderItem = ({item}) => (
    <Item title={item.name} roll={item.roll} img={item.img} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.roll}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 70,
    elevation: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    paddingBottom: 2,
    paddingLeft: 6,
  },
  roll: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 6,
  },
  imbStyle:{
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'blue',
  },
  img: {
    width: 65,
    height: 65,
    borderRadius: 50,
    margin: 2,
  },
});

export default App;
