import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Fontisto } from "@react-native-vector-icons/fontisto";
import user from "./reducers/user";

import Map from "./screens/Map";
import Places from "./screens/Places";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: {user},
});

const TabNavigator = () => {
  
  return (
    
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName = "";

              if (route.name === "Map") {
                iconName = "navigate";
              } else if (route.name === "Places") {
                iconName = "map-marker-alt";
              }

              return <Fontisto name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#B733D0",
            tabBarInactiveTintColor: "#335561",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Map" component={Map} />
          <Tab.Screen name="Places" component={Places} />
        </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
