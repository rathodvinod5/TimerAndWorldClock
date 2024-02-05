/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TimerDashboard from '../screens/timer/Timer';
import Home from '../screens/home/Home';
import WorldClock from '../screens/world-clock/WorldClock';
import WorldClockPSTAndIST from '../screens/world-PST-IST/WorldClock';

type StackParamList = {
  Home: undefined;
  Timer: undefined;
  WorldClock: undefined;
  // Details: { storeId: string, storeName: string } | undefined;
};

const Stack = createStackNavigator<StackParamList>();

function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Timer" component={TimerDashboard} />
        <Stack.Screen name="WClock" component={WorldClock} />
        <Stack.Screen name="WClockPSTIST" component={WorldClockPSTAndIST} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;
