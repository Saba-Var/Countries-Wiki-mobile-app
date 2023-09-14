import { Avatar, Button, Card } from 'react-native-paper'
import { CountryInfoCardProps } from './types'

const LeftContent = (props) => <Avatar.Icon {...props} icon='folder' />

const CountryInfoCard: React.FC<CountryInfoCardProps> = ({ countryInfo }) => {
  return (
    <Card
      style={{
        marginTop: 25,
        width: '90%',
        alignSelf: 'center',
      }}
      mode='elevated'
    >
      <Card.Title
        title={countryInfo.name.common}
        subtitle={countryInfo.region}
      />

      <Card.Cover
        source={{ uri: countryInfo.flags.png }}
        style={{
          backgroundColor: 'transparent',
          paddingHorizontal: 12,
        }}
      />

      <Card.Actions>
        <Button
          style={{
            marginTop: 10,
          }}
          mode='contained-tonal'
          onPress={() => console.log('Pressed')}
        >
          Read More
        </Button>
      </Card.Actions>
    </Card>
  )
}

export default CountryInfoCard
