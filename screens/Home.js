import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from 'react';



export default function HomeSreen({navigation}) {
  const [nickname, setNickname] = useState("");

  function handleMap() {
    if(nickname) {
      navigation.navigate("TabNavigator")
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/imagehome.png')}
      />
      <Text>Welcome to Locate Me</Text>
      <TextInput
        onChangeText={(value) => setNickname(value)}
        style={styles.input}
        placeholder="nickname"
      />
      <TouchableOpacity onPress={handleMap}>
        <Text style={styles.textButton}>Got to map</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    textDecorationLine: 'underline',
  },
  textButton: {
    color: '#fff',
    backgroundColor: '#B733D0',
    padding: 10,
    borderRadius: 10,
    width: ''
  }
})