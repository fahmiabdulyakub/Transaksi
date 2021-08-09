import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from '../constants';
import {DaftarTransaksi, DetailTransaksi} from '../screens';
const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <Stack.Navigator initialRouteName="DaftarTransaksi">
          <Stack.Screen
            name="DaftarTransaksi"
            component={DaftarTransaksi}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailTransaksi"
            component={DetailTransaksi}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
