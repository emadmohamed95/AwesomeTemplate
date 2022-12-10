/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect } from 'react';
 import {
   StyleSheet,
 } from 'react-native';
 import { Provider, useSelector } from "react-redux";
 import { store, persistor } from "./src/store/index.js";
 import { PersistGate } from 'redux-persist/integration/react';
 import { NavigationContainer } from '@react-navigation/native';
 import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
 import { AuthStackNavigatior } from './src/navigation/AuthStackNavigatior.jsx';
 import SplashScreen from "react-native-splash-screen"; //import SplashScreen
import CustomSnackbar from "./src/components/CustomSnackbar/CustomSnackbar"

 const theme = {
   ...DefaultTheme,
   roundness: 2,
   colors: {
     ...DefaultTheme.colors,
     primary: 'blue',
     accent: 'green',
   },
 };
 
 const AppWrapper = () => {

  
   return (
 <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <PaperProvider theme={theme}>
       <App />
       </PaperProvider>
       </PersistGate>
     </Provider>  )
 }
 
 const App = () => {
   
  
  const auth = useSelector(state=>state.auth);

  console.log(auth)

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
 
   return (
     <>
         <NavigationContainer>
           <AuthStackNavigatior/>
         </NavigationContainer>  

         <CustomSnackbar/>

         </>      
   );
 };
 
 const styles = StyleSheet.create({
 });
 
 export default AppWrapper;
 