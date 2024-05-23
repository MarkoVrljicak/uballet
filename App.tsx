import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log({ storybook: process.env.EXPO_PUBLIC_STORYBOOK });
  if (process.env.EXPO_PUBLIC_STORYBOOK === "true") {
    console.log({
      storybook: "true"
    })
    const Storybook = require("./.storybook").default;

    return <Storybook />
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
