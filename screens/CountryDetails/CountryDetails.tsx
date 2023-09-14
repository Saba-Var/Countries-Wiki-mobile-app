import { Card, List, Text, MD2Colors, Button } from 'react-native-paper'
import { View, StyleSheet, ScrollView } from 'react-native'
import useCountryDetails from './useCountryDetails'
import { InfoText } from '@/components'

const CountryDetails = () => {
  const { formattedCountryArea, countryInfo, currencies, navigation } =
    useCountryDetails()

  return (
    <ScrollView style={styles.container}>
      <Card.Cover source={{ uri: countryInfo.flags.png }} />

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
            style={{ paddingVertical: 0 }}
            key={currency.name}
            left={() => (
              <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>
                {currency.symbol}
              </Text>
            )}
            title={
              <Text style={{ color: MD2Colors.grey800 }}>{currency.name}</Text>
            }
          />
        ))}
      </List.Section>

      <Button
        onPress={() =>
          navigation.navigate('MapModal', {
            latitude: countryInfo.latlng[0],
            longitude: countryInfo.latlng[1],
            title: `${countryInfo.name.common} ${countryInfo.flag}`,
          })
        }
        style={{ marginTop: 15 }}
        mode='outlined'
        icon='map'
      >
        Show {countryInfo.name.common} on map
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
  },

  infoTextsContainer: {
    gap: 5,
    marginTop: 20,
  },
})

export default CountryDetails
