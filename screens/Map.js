import { StyleSheet, Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
import { useEffect, useState } from 'react';

export default function MapScreen() {

  const [currentPOoition, setCurrentPosition] = useState(null);

  useEffect(() => {
    (async() => {
      const {status} = await Location.requestForegroundPermissionsAsync();

      if(status === "granted"){
        Location.watchPositionAsync({distanceInterval : 10},
          (location) => {
            setCurrentPosition(location.coords);
          }
        )
      }
    })()
  },[])

  return (
    <MapView mapType="hybrid" initialRegion={{latitude: 48.859, longitude: 2.347, latitudeDelta: 0.2, longitudeDelta: 0.2,} }  style={styles.map} >
      <Marker
        title='Paris'
        coordinate={{latitude: 48.859, longitude: 2.347}}
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  }
})