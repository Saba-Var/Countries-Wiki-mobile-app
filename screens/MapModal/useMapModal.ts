import { useRoute, useNavigation } from '@react-navigation/native'
import type { MapNavigationData } from '@/types'
import { useLayoutEffect } from 'react'

const useMapModal = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { latitude, longitude, title } = route?.params as MapNavigationData

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Map view of ${title}`,
    })
  }, [navigation, title])

  return {
    longitude,
    latitude,
  }
}

export default useMapModal
