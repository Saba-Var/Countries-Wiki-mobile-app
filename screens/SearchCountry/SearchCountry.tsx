import useSearchCountry from './useSearchCountry'
import { Searchbar } from 'react-native-paper'
import { CountryInfoCard } from '@/components'
import { View, FlatList } from 'react-native'
import { Controller } from 'react-hook-form'

const SearchCountry = () => {
  const { control, countriesData, isLoading, onRefresh } = useSearchCountry()

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Searchbar
            onChangeText={(value) => onChange(value)}
            placeholder='Enter country name'
            style={{ marginVertical: 10 }}
            onBlur={onBlur}
            value={value}
          />
        )}
        rules={{
          minLength: {
            message: 'Min length is 4',
            value: 4,
          },
        }}
        name='name'
      />

      <FlatList
        renderItem={({ item }) => <CountryInfoCard countryInfo={item} />}
        keyExtractor={(item) => item.name.official}
        refreshing={isLoading}
        onRefresh={onRefresh}
        data={countriesData}
        style={{ flex: 1, marginBottom: 10 }}
      />
    </View>
  )
}

export default SearchCountry
