import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Fontisto } from "@react-native-vector-icons/fontisto";

import Home from "./screens/Home";
import Map from "./screens/Map";
import Places from "./screens/place.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ()=> {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Map") {
            iconName = "navigate";
          } else if (route.name === "Places") {
            iconName = "pinboard";
          }

          return <Fontisto name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: "#B733D0",
        tabBarInactiveTintColor : "#335561"
      })}
    >
      {/* <Tab.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Places" component={Places} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen options={{ gestureEnabled: true,}} name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
