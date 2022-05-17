import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Welcome} from "./screens/Welcome";
import RootStack from "./navigators/RootStack";
export default function App() {
  let [fontsLoaded] = useFonts({
"OpenSans-Bold":require("./assets/fonts/OpenSans-Bold.ttf"),
"OpenSans-Regular":require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if(!fontsLoaded){
    return <AppLoading/>;
  }
  return (
 <RootStack></RootStack>
  );
}


