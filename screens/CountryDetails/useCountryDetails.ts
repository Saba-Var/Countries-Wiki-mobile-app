import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { CountryInfo } from '@/types'

const useCountryDetails = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { countryInfo } = route.params as { countryInfo: CountryInfo }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: countryInfo.name.common,
    })
  }, [navigation, countryInfo.name.common])

  return { countryInfo }
}

export default useCountryDetails
