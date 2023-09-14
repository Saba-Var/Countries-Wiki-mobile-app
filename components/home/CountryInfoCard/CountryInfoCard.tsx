import { CountryInfoCardProps } from './types'
import { View, Text } from 'react-native'

const CountryInfoCard: React.FC<CountryInfoCardProps> = ({ countryInfo }) => {
  return (
    <View>
      <Text>{countryInfo.name.common} </Text>
    </View>
  )
}

export default CountryInfoCard
