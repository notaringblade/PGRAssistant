import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigation/ScreenNavigation';
import Drawer from './Navigation/zDrawerNavigation'
export default function App() {
  
  return (
    Navigator()
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
