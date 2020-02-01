import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './screens/Login'
import Register from './screens/Register'
import Map from './screens/Map'
// const App= () =>  {
//   return (
//     <>
//       <StatusBar  />
//       <Login/>

//     </>


//   );
// };

const App= () =>  {
  return (
    <>
      <Map  />

    </>


  );
};

const styles = StyleSheet.create({
  centre:{flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  box:{
    padding:4,
    paddingHorizontal:12,
    borderColor:'black',
    borderWidth:.5
  }
});

export default App;
