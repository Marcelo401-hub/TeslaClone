import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarList from './components/CarItem/CarList';
import Header from './components/CarItem/Header';

export default function App() {
  return (
    <View style={styles.container}>

       <Header/>

       <CarList/> 
     
       <StatusBar style='dark' />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  color: {
    color: '#131313'
  },
});
