import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect, useMemo, useState } from 'react'
import { CountryInfo } from '@/types'

const useCountryDetails = () => {
  const [showMapModal, setShowMapModal] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  const { countryInfo } = route.params as { countryInfo: CountryInfo }

  const formattedCountryArea = useMemo(() => {
    return (
      countryInfo.area
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$&,')
        .slice(0, -3) + ' km²'
    )
  }, [])

  const currencies = useMemo(() => {
    return Object.values(countryInfo.currencies)
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${countryInfo.name.common} ${countryInfo.flag}`,
    })
  }, [navigation, countryInfo.name.common])

  return {
    formattedCountryArea,
    setShowMapModal,
    showMapModal,
    countryInfo,
    currencies,
  }
}

export default useCountryDetails
