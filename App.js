import { StatusBar as ExpoStatusBar  } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import RestaurantsScreen from './src/features/restaurants/screens/Restaurants.screen';




export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style = 'auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "1rem"
  },
});
