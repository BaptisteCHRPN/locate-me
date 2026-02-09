import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MapScreen() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        Location.watchPositionAsync({ distanceInterval: 10 },
          (location) => {
            setCurrentPosition(location.coords);
          }
        );
      }
    })();
  }, []);

  const placeMarkers = user.places.map((place, i) => (
    <Marker
      key={i}
      title={place.name}
      coordinate={{ latitude: place.latitude, longitude: place.longitude }}
      pinColor="#B733D0"
    />
  ));

  return (
    <MapView
      mapType="hybrid"
      initialRegion={{
        latitude: 48.859,
        longitude: 2.347,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
      style={styles.map}
    >
      {placeMarkers}
      {currentPosition && (
        <Marker
          title="My position"
          coordinate={currentPosition}
          pinColor="yellow"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
