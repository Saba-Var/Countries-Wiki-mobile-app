import MapView from 'react-native-maps'
import { MapModalProps } from './types'
import { Modal } from 'react-native'

const MapModal: React.FC<MapModalProps> = ({
  longitude,
  latitude,
  setShow,
  show,
}) => {
  return (
    <Modal
      onRequestClose={() => setShow((prev) => !prev)}
      animationType='slide'
      transparent={true}
      visible={show}
    >
      <MapView
        style={{
          flex: 1,
        }}
        initialRegion={{
          longitudeDelta: 5,
          latitudeDelta: 5,
          longitude,
          latitude,
        }}
      />
    </Modal>
  )
}

export default MapModal
