import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import { Home, CountryDetails } from '@/screens'
import { Appbar } from 'react-native-paper'
import { MapModal } from '@/components'

const RootStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Home'
        component={Home}
        options={{
          title: '🌐 Countries Wiki',
          headerRight: () => <Appbar.Action icon='magnify' />,
        }}
      />

      <MainStack.Screen name='CountryDetails' component={CountryDetails} />
    </MainStack.Navigator>
  )
}

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              animation: 'slide_from_bottom',
            }}
          >
            <RootStack.Screen
              component={MainStackScreen}
              name='MainStackScreen'
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen component={MapModal} name='MapModal' />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App
