import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ProductDetail from './Screens/ProductDetail';
import Beverages from './Screens/Beverages';
import Checkout from './Screens/Checkout';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './Navigation/BottomNavigation';

const App = () => {
  return (
    // <Checkout/>
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
