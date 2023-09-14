import MapView from 'react-native-maps'
import useMapModal from './useMapModal'
import { View } from 'react-native'

const MapModal = () => {
  const { latitude, longitude } = useMapModal()

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitudeDelta: 5,
          latitudeDelta: 5,
          longitude,
          latitude,
        }}
      />
    </View>
  )
}

export default MapModal
