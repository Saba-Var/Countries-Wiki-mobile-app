import { View, FlatList, StyleSheet } from 'react-native'
import { CountryInfoCard, Loader } from '@/components'
import { StatusBar } from 'expo-status-bar'
import useHome from './useHome'

const Home = () => {
  const { allCountriesData, isLoading, onRefresh } = useHome()

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
})

export default Home
