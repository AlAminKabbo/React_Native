// import React from 'react';
// import StudentList from '../D51/Screen/StudentList';
// const App = () => {
//   return <StudentList />;
// };
// export default App;
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StudentList from './Screen/StudentList';
import StudentDetails from './Screen/StudentDetails';

const Stack = createNativeStackNavigator();

const Navigating = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Student List" component={StudentList}
        options={{
          headerStyle: {
            backgroundColor: 'blue',
          },

          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetails}
        options={{
          title: 'Student Details' ,
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return <NavigationContainer>{Navigating()}</NavigationContainer>;
};
export default App;
