import { Text, MD2Colors } from 'react-native-paper'
import type { InfoTextProps } from './types'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

const InfoText: React.FC<InfoTextProps> = ({ value, label }) => {
  return (
    <View style={styles.container}>
      <Text variant='titleMedium'>{label}:</Text>
      <Text style={styles.text} variant='titleMedium'>
        {value}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  text: {
    color: MD2Colors.grey800,
  },
})

export default InfoText
