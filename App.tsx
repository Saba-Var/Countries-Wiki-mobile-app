import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import { Home } from '@/screens'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Home} name='🌐 Countries Wiki' />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App
