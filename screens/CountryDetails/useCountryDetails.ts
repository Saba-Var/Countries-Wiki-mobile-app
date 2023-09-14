import type { CountryInfo, Navigate, MapNavigationData } from '@/types'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useLayoutEffect, useMemo } from 'react'

const useCountryDetails = () => {
  const navigation = useNavigation<Navigate<MapNavigationData>>()
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
    countryInfo,
    currencies,
    navigation,
  }
}

export default useCountryDetails
