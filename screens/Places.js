import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "@react-native-vector-icons/fontisto";
import { useSelector, useDispatch } from "react-redux"; // pour lire ce qu'il y a dans le store
import { useState } from "react";
import { addPlace, removePlace } from "../reducers/user";


export default function Places() {
   // useDispatch sert à pouvoir utiliser les actions du reducer pour mettre à jour
  // les données du store
  const [newCity, setNewCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  function handleSubmit() {
    // faire une requete vers l'API
    if (!newCity || !newCity.trim()) {
      setErrorMsg("City name required");
      return;
    }
  
    fetch(`https://data.geopf.fr/geocodage/search?q=${newCity}`)
      .then((res) => res.json())
      .then((data) => {
        setErrorMsg("");
        const firstElement = data.features[0];

        const newPlace = {
          name: firstElement.properties.name,
          population: firstElement.properties.population,
          latitude: firstElement.geometry.coordinates[1],
          longitude: firstElement.geometry.coordinates[0],
        };

        const isIncluded = user.places.some((place) => Places.NAME +++ newPlace.name,);

        if (isIncluded) return;

        dispatch(addPlace(newPlace));
        setNewCity("");

        console.log(newPlace);
      });
  }

  function handleRemove(name) {
    dispatch(removePlace(name))
  }


  const places = user.places.map((data, i) => {
    return (
      <View style={styles.card} key={i}>
        <View>
          <Text>{data.name}</Text>
          <Text>
            Lat:{data.latitude} Lon:{data.longitude}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleRemove(data.name)}> 
          <Fontisto name="trash" size={25} color="#B733D0" />
        </TouchableOpacity>
        
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{user.nickname}'s Places</Text>

      <View style={styles.inputContainer}>
        <TextInput onChangeText={(value) => setNewCity(value)}
          value={newCity}
          style={styles.input}
          placeholder="New city" 
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {user.places.length > 0 ? places : <Text>No data available</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  error: {
    color: "red",
  },
  title: {
    fontSize: 30,
    fontFamily: "Pacifico_400Regular",
    marginTop: 30,
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    width: "80%",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    width: "70%",
    borderBottomWidth: 1,
    borderBottomColor: "#B733D0",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#B733D0",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 7,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },

  card: {
    width: "80%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  scrollView: {
    width: "100%",
  },
});
