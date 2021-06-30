// /* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, TouchableOpacity, Text, StyleSheet, Modal} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.center}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.showModal}>Show Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centerView}>
          <View style={styles.modalBox}>
            <Text style={styles.textView}>Hello World!!</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeModal}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  showModal: {
    backgroundColor: 'green',
    fontSize: 18,
    color: 'white',
    borderRadius: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  closeModal: {
    backgroundColor: 'blue',
    fontSize: 18,
    color: 'white',
    borderRadius: 20,
    padding: 10,
    fontWeight: 'bold',
  },
  modalBox: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 5,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  textView: {
    fontSize: 22,
    padding: 5,
  },
});
export default App;
