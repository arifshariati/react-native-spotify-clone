import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

//component
import PlayerWidget from "./components/PlayerWidget";

import Amplify from "aws-amplify";
import amplifyTeamProvider from "./amplify/team-provider-info.json";
Amplify.configure(amplifyTeamProvider.dev.awscloudformation);

import { AppContext } from "./AppContext";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string | null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{
            songId,
            setSongId: (id: string) => setSongId(id),
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
};

export default App;
