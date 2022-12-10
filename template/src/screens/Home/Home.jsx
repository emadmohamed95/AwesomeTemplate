import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import Bat from '../../assets/images/bat.svg'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../../reducers/snackbarSlice'

const Home = () => {
    const dispatch = useDispatch()
  return (
      <SafeAreaView>
    <View style={styles.container}>
      <Text>Home</Text>
      <Button icon="camera" mode="contained" onPress={() => {dispatch(showSnackbar({message:'hi', type:"success"}))}}>
    Press me
  </Button>
  <Bat/>
    </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center'

    }
})