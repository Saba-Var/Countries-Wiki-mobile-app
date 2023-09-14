import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import { Home, CountryDetails } from '@/screens'
import { Appbar } from 'react-native-paper'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                title: '🌐 Countries Wiki',
                headerRight: () => (
                  <Appbar.Action icon='magnify' onPress={() => {}} />
                ),
              }}
            />

            <Stack.Screen name='CountryDetails' component={CountryDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App
