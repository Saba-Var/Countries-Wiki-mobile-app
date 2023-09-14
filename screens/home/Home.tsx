import { CountryInfoCard, Loader } from '@/components'
import { View, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import useHome from './useHome'

const Home = () => {
  const { allCountriesData, isLoading, onRefresh } = useHome()

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar style='auto' />

      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          renderItem={({ item }) => <CountryInfoCard countryInfo={item} />}
          keyExtractor={(item) => item.name.official}
          data={allCountriesData}
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      )}
    </View>
  )
}

export default Home
