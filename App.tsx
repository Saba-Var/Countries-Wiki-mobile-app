import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, CountryDetails, SearchCountry } from '@/screens'
import { QueryClient, QueryClientProvider } from 'react-query'
import { PaperProvider } from 'react-native-paper'
import { Appbar } from 'react-native-paper'
import { MapModal } from '@/components'
import type { Navigate } from './types'

const RootStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()

const MainStackScreen = () => {
  const navigation = useNavigation<Navigate>()

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Home'
        component={Home}
        options={{
          title: '🌐 Countries Wiki',
          headerRight: () => (
            <Appbar.Action
              icon='magnify'
              onPress={() => navigation.navigate('SearchCountry')}
            />
          ),
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
            <RootStack.Screen name='MapModal' component={MapModal} />
            <RootStack.Screen name='SearchCountry' component={SearchCountry} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  )
}

export default App
