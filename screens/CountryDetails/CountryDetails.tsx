import { Card, List, Text, MD2Colors } from 'react-native-paper'
import useCountryDetails from './useCountryDetails'
import { View, StyleSheet } from 'react-native'
import { InfoText } from '@/components'

const CountryDetails = () => {
  const { countryInfo, formattedCountryArea, currencies } = useCountryDetails()

  return (
    <View style={styles.container}>
      <Card.Cover source={{ uri: countryInfo.flags.png }} style={{}} />

      <View style={styles.infoTextsContainer}>
        <InfoText label='Official Name' value={countryInfo.name.official} />
        <InfoText label='Population' value={countryInfo.population} />
        <InfoText label='Capital city' value={countryInfo.capital[0]} />
        <InfoText label='Region' value={countryInfo.region} />
        <InfoText label='Subregion' value={countryInfo.subregion} />
        <InfoText label='Area' value={formattedCountryArea} />
      </View>

      <List.Section style={{ marginTop: 20 }}>
        <Text variant='titleMedium'>Currencies:</Text>

        {currencies.map((currency) => (
          <List.Item
            left={() => (
              <Text style={{ fontWeight: 'bold' }}>{currency.symbol}</Text>
            )}
            style={{ paddingVertical: 0 }}
            title={
              <Text style={{ color: MD2Colors.grey800 }}>{currency.name}</Text>
            }
          />
        ))}
      </List.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
  },

  infoTextsContainer: {
    gap: 5,
    marginTop: 20,
  },
})

export default CountryDetails
