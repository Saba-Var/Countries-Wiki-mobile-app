import { useNavigation } from '@react-navigation/native'
import { Button, Card } from 'react-native-paper'
import { CountryInfoCardProps } from './types'
import { StyleSheet } from 'react-native'
import type { Navigate } from '@/types'

const CountryInfoCard: React.FC<CountryInfoCardProps> = ({ countryInfo }) => {
  const { navigate } = useNavigation<Navigate<CountryInfoCardProps>>()

  return (
    <Card style={styles.container} mode='outlined'>
      <Card.Title
        title={countryInfo.name.common}
        subtitle={countryInfo.region}
      />

      <Card.Cover
        source={{ uri: countryInfo.flags.png }}
        style={styles.flagCover}
      />

      <Card.Actions>
        <Button
          onPress={() => navigate('CountryDetails', { countryInfo })}
          style={styles.readMoreButton}
          mode='contained-tonal'
        >
          Details
        </Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 25,
    width: '90%',
  },

  flagCover: {
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
  },

  readMoreButton: {
    marginTop: 10,
  },
})

export default CountryInfoCard
