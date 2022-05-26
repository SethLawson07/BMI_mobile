import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator}  from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import BmiScreen from './src/screens/BmiScreen';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to BMI Calculator' }}
        />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }}/>
        <Stack.Screen name="Calculate" component={BmiScreen} options={{ title: 'Calculate your BMI' }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack;