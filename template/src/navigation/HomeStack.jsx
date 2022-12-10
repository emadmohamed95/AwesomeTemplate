import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
const Stack = createStackNavigator();

// screenOptions={{ header: (props) => <CustomNavigationBar {...props} />, title:"Admin" }}

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}
