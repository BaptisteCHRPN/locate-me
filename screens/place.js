import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PlacesScreen () {
  return (
    <View style={styles.container}>
      <Text>John Doe's PLaces</Text>
      <TextInput
              onChangeText=""
              style={styles.input}
              placeholder="New city"
      />
      <TouchableOpacity onPress="">
              <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    backgroundColor: '#B733D0',
    padding: 10,
    borderRadius: 10,
    width: ''
  }
})