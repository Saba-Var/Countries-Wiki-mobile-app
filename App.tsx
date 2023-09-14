import { QueryClient, QueryClientProvider } from 'react-query'
import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style='auto' />
        </View>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
