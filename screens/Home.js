import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNickname } from "../reducers/user";


export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const [nickname, setNickname] = useState("");
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  function handleNavigation() {
    if (!nickname || !nickname.trim()) return;

    dispatch(addNickname(nickname))

    navigation.navigate("TabNavigator");
  }

  return (
      <KeyboardAvoidingView style={styles.container}>
        <Image source={require("../assets/imagehome.png")} style={styles.image} />
        <View style={styles.buttonsContainer}>
          <Text style={styles.title}>Welcome to locate me</Text>
          <TextInput style={styles.input}
                    onChangeText={(value) => setNickname(value)}
                    placeholder="Nickname..." />
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.textButton}>Go to map</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  image: {
    flex: 2,
    width: "100%",
    height: "50%",
    marginTop: 50,
  },
  title: {
    fontSize: 35,
    fontFamily: "Pacifico_400Regular",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#B733D0",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#B733D0",
    width: "90%",
    paddingVertical: 12,
    borderRadius: 12,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
  },
});
