import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/map.jpg')}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: '50%'
  }
})