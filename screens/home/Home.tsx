import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import useHome from './useHome'

const Home = () => {
  useHome()

  return (
    <View>
      <Text>Home</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default Home
