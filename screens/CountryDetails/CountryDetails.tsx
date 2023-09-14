import useCountryDetails from './useCountryDetails'
import { View, Text } from 'react-native'

const CountryDetails = () => {
  const { countryInfo } = useCountryDetails()

  return (
    <View>
      <Text>{countryInfo.name.common}</Text>
    </View>
  )
}

export default CountryDetails
