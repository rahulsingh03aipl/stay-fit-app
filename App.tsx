
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

//  @ts-ignore

import React from 'react';
import SignUp from './src/containers/signUpPage/signUp';
import NRPage1 from './src/containers/neckRotation/NRPage1';
import NRPage2 from './src/containers/neckRotation/NRPage2';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Login from './src/containers/loginPage/Login';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  return (
    <>


<NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen
          name="step1"
          component={NRPage1}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="step2" component={NRPage2} />
       
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;

