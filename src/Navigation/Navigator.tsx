
import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from "../HomeScreen/HomeScreen";
import type { FC } from "react";

const Navigator:FC =() => {
        return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          ); 
}

export default Navigator;