import { Provider } from "react-redux";
import { store } from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";

// Main Dependencies for the app

// 1) @Reduxjs/toolkit - For global state management
// 2) tailwind-react-native-classnames - For tailwind styling
// 3) react-native-elements - Tons of icon pack available
// 4) @react-navigation/native - Navigator
// 5) @react-navigation/native-stack - For stacking screen
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // NOTICE : When you are working with react-native, typically direction of flex box(View) is column not row based approach. So keep this in mind.
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
