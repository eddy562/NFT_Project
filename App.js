import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const Stack = createStackNavigator();
 const theme= {
  ...DefaultTheme.colors,
  background:"transparent"
 }

const App= ()=> {
  return (
    <NavigationContainer theme={theme}>

      <Stack.Navigator screenOptions={{headerShown:false}}
      initialRouteName="Home">
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;