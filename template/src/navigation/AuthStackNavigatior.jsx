import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { HomeStack } from './HomeStack';
const Stack = createStackNavigator();



export const AuthStackNavigatior = () => {
    return (
        <Stack.Navigator initialRouteName="HomeStack" screenOptions={{headerShown:false}}
        >

            {true?
              <>
              <Stack.Screen name="HomeStack" component={HomeStack}/>
            </>
              :
              <>
              </>
            }
          </Stack.Navigator>
    )
}
