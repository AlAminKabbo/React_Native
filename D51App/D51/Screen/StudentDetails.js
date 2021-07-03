/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';

const StudentDetails = ({route}) => {
  const {title, roll, img, phone, blood, url} = route.params;
  console.log(url);
  return (
    <View style= {styles.container}>
      <View style= {styles.imgCircle}>
      <Image style= {styles.img} source={img} />
      </View>
      <View style= {styles.textView}>
      <Text style= {styles.text}>Name : {title}</Text>
      <Text style= {styles.text}>Roll : {roll}</Text>
      <Text style= {styles.text}>Phone No : {phone}</Text>
      <Text style= {styles.text}>Blood Group : {blood}</Text>
      </View>
      <View style= {styles.logoDirection}>
        <TouchableOpacity
          onPress={() =>{Linking.openURL(`tel:${phone}`)}}
        ><Image style= {styles.dialLogo} source={require('../image/dial.jpg')}/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() =>{Linking.openURL(`sms:${phone}`)}}
        ><Image style= {styles.smsLogo} source={require('../image/sms.jpg')}/>
        </TouchableOpacity>

        <View>
        <TouchableOpacity 
        onPress={() =>{Linking.openURL(url)}}
        ><Image style= {styles.fbLogo} source={require('../image/fb.png')}/>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  logoDirection:{
    flexDirection:'row',
  },
  dialLogo:{
    width: 70,
    height: 70,
    borderRadius: 100,
    alignSelf:'flex-start',
    marginStart: 90,
  },
  smsLogo:{
    width: 70,
    height: 70,
    borderRadius: 100,
    alignSelf:'center',
    marginStart: 12,
  },
  fbLogo:{
    width: 65,
    height: 65,
    borderRadius: 100,
    alignSelf:'center',
    marginStart: 15,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
  text:{
    fontWeight: 'bold',
    fontSize: 28,
    color: 'blue',
    borderWidth: 2,
    borderRadius:50,
    borderColor:'blue',
    padding: 3,
    paddingTop: 3,
    backgroundColor:'white',
    marginBottom: 10,
    paddingLeft: 20,
  },
  textView:{
    padding: 15,
  },
  imgCircle:{
    width: 210,
    height: 210,
    borderWidth: 5,
    borderRadius:120,
    borderColor:'blue',
    alignSelf:'center',
    marginTop:15,
    padding: 1,
  }
});
export default StudentDetails;
