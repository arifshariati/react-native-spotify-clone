import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';



//component
import PlayerWidget from './components/PlayerWidget';


import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <PlayerWidget />
      </SafeAreaProvider>
    );
  }
}

export default App;
