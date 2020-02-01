import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './screens/Login'

const App= () =>  {
  return (
    <>
      <StatusBar  />
      <Login/>

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
