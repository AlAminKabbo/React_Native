/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


const DATA = [
  {
    id: '1',
    name: 'Joy Krishno Sing',
    roll: '01',
    blood: 'O+',
    phone: '01744639369',
    img: require('../image/r1-min.jpg'),
    url: 'https://www.facebook.com/profile.php?id=100009082546481',
  },
  {
    id: '2',
    name: 'Hamze Ahmed Abdlaahe',
    roll: '02',
    blood: 'B+',
    phone: '01745313744',
    img: require('../image/r2-min.jpg'),
    url: 'https://www.facebook.com/hmza.ahm3',
  },
  {
    id: '3',
    name: 'Nitish Biswas',
    roll: '05',
    blood: 'O+',
    phone: '01956732580',
    img: require('../image/r5-min.jpg'),
    url: 'https://www.facebook.com/profile.php?id=100009017233862',
  },
  {
    id: '4',
    name: 'Sarreha Tasmin Rikta',
    roll: '06',
    blood: 'A+',
    phone: '01703822674',
    img: require('../image/r6-min.jpg'),
    url: 'https://www.facebook.com/sanzidanahar.santy.3',
  },
  {
    id: '5',
    name: 'Abdiqadir Muse Abdilahi',
    roll: '07',
    blood: 'O+',
    phone: '01756031409',
    img: require('../image/r7-min.jpg'),
    url: 'https://www.facebook.com/Tiisa.wate',
  },
  {
    id: '6',
    name: 'Ayonti Joanna Gathia',
    roll: '09',
    blood: 'A+',
    phone: '01681457282',
    img: require('../image/r9-min.jpg'),
    url: 'https://www.facebook.com/joanna.ayonti',
  },
  {
    id: '7',
    name: 'Md. Abu Musha',
    roll: '10',
    blood: 'B+',
    phone: '01789393989',
    img: require('../image/r10-min.jpg'),
    url: 'https://www.facebook.com/md.musha.3726613',
  },
  {
    id: '8',
    name: 'Nazmul Hossain Nahid',
    roll: '11',
    blood: 'O+',
    phone: '01737185373',
    img: require('../image/r11-min.jpg'),
    url: 'https://www.facebook.com/profile.php?id=100011524358252',
  },
  {
    id: '9',
    name: 'Md. Nahid Hossen',
    roll: '13',
    blood: 'O+',
    phone: '01775936826',
    img: require('../image/r13-min.jpg'),
    url: 'https://www.facebook.com/foisal.ahmed.77377',
  },
  {
    id: '10',
    name: 'Adan Diriye Roble',
    roll: '14',
    blood: 'A+',
    phone: '01646313695',
    img: require('../image/r14-min.jpg'),
    url: 'https://www.facebook.com/Adesh.Roble.45',
  },
  {
    id: '11',
    name: 'Atiqur Rahman Atiq',
    roll: '16',
    blood: 'O+',
    phone: '01700525823',
    img: require('../image/r11-min.jpg'),
    url: 'https://www.facebook.com/Atiq372000',
  },
  {
    id: '12',
    name: 'Imran Nur Hirey',
    roll: '17',
    blood: 'B+',
    phone: '01730978088',
    img: require('../image/r17-min.jpg'),
    url: 'https://www.facebook.com/yuusuf.salaadgeele.3',
  },
  {
    id: '13',
    name: 'Robiul Hossain Mollah',
    roll: '18',
    blood: 'O+',
    phone: '01645769362',
    img: require('../image/r7-min.jpg'),
    url: 'https://www.facebook.com/robiulhossain.shanto.54',
  },
  {
    id: '14',
    name: 'Shafie Ahmed Roble',
    roll: '19',
    blood: 'B+',
    phone: '01646313856',
    img: require('../image/r19-min.jpg'),
    url: 'https://www.facebook.com/shaviano.gonzalez',
  },
  {
    id: '15',
    name: 'Al Maruf Hossain',
    roll: '21',
    blood: 'O+',
    phone: '01718511795',
    img: require('../image/r21-min.jpg'),
    url: 'https://www.facebook.com/profile.php?id=100012399033019',
  },
  {
    id: '16',
    name: 'Al Amin Kabbo',
    roll: '23',
    blood: 'O+',
    phone: '01728861499',
    img: require('../image/Kabbo.png'),
    url: 'https://www.facebook.com/FA.AminKabbo',
  },
  {
    id: '17',
    name: 'Shafie Abdirahman Rage',
    roll: '25',
    blood: 'A+',
    phone: '01710672931',
    img: require('../image/r25.jpg'),
    url: 'https://www.facebook.com/Armaan.rage7',
  },
  {
    id: '18',
    name: 'Abdullahi Mohamed Hilowle',
    roll: '28',
    blood: 'B+',
    phone: '01821436294',
    img: require('../image/r28-min.jpg'),
    url: 'https://www.facebook.com/profile.php?id=100011423505482',
  },
  {
    id: '19',
    name: 'Mohamednur Abshir',
    roll: '29',
    blood: 'O+',
    phone: '01730931984',
    img: require('../image/r29-min.jpg'),
    url: 'https://www.facebook.com/mohammednuur.abshir',
  },
  {
    id: '20',
    name: 'Abdifitah Abdi Warsame',
    roll: '31',
    blood: 'B+',
    phone: '01792636546',
    img: require('../image/r31-min.jpg'),
    url: 'https://www.facebook.com/mudane.mashquul.3',
  },
  {
    id: '21',
    name: 'Md. Mehedi Hasan Ullah',
    roll: '33',
    blood: 'O+',
    phone: '01687610784',
    img: require('../image/r33-min.jpg'),
    url: 'https://www.facebook.com/mmehedi44',
  },
  {
    id: '22',
    name: 'Abdimajid Mohamed',
    roll: '34',
    blood: 'B+',
    phone: '01772497067',
    img: require('../image/r34-min.jpg'),
    url: 'https://www.facebook.com/maajid.khalif.9',
  },
  {
    id: '23',
    name: 'Md. Hassan Reza',
    roll: '37',
    blood: 'O+',
    phone: '01744197024',
    img: require('../image/r37-min.jpg'),
    url: 'https://www.facebook.com/profile.php?id=100004349658600',
  },
  {
    id: '24',
    name: 'Pro Yuusuf Diiriye Jaanbiir',
    roll: '39',
    blood: 'AB+',
    phone: '01762284387',
    img: require('../image/r39-min.jpg'),
    url: 'https://www.facebook.com/yuusuf.maxamuud.12',
  },
  {
    id: '25',
    name: 'Kkm Anas',
    roll: '40',
    blood: 'O+',
    phone: '01766461557',
    img: require('../image/r40-min.jpg'),
    url: 'https://www.facebook.com/akm.anas.1',
  },
];



const StudentList = ({navigation}) => {
  const Item = ({title, roll, img, phone, blood, url}) => (
    <TouchableOpacity onPress={() => navigation.navigate('StudentDetail',{
      title,
      roll,
      img,
      phone,
      blood,
      url,
    })}>
      <View style={styles.item}>
        <View style={styles.imbStyle}>
          <Image style={styles.img} source={img} />
        </View>
        <View>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.roll}>Roll : {roll}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => (
    <Item title={item.name} roll={item.roll} img={item.img} phone={item.phone} blood={item.blood} url={item.url}/>
  );

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar barStyle = "white-content" hidden = {false} backgroundColor = "blue" translucent = {true}/>
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
  imbStyle: {
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

export default StudentList;
