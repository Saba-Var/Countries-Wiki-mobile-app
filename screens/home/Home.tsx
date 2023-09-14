import { View, Text, FlatList } from 'react-native'
import { CountryInfoCard } from '@/components'
import { StatusBar } from 'expo-status-bar'
import useHome from './useHome'

const Home = () => {
  const { allCountriesData } = useHome()

  return (
    <View>
      <Text>Home</Text>
      <StatusBar style='auto' />

      <FlatList
        renderItem={({ item }) => <CountryInfoCard countryInfo={item} />}
        keyExtractor={(item) => item.name.official}
        data={allCountriesData}
      />
    </View>
  )
}

export default Home
