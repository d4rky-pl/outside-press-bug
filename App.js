import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import OutsidePressHandler, { EventProvider } from "react-native-outside-press";
import { useState, useEffect, createContext, useContext } from 'react'

const SessionContext = createContext({});
export const useSession = () => useContext(SessionContext);

const Component = () => {
  const { a } = useSession()

  return (
    <SafeAreaView style={styles.container}>
      <OutsidePressHandler onOutsidePress={() => null}>
        <View />
      </OutsidePressHandler>
    </SafeAreaView>
  )
}

export default function App() {
  return (
    <EventProvider>
      <SessionContext.Provider value={{ a: () => null }}>
        <Component />
      </SessionContext.Provider>
    </EventProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
