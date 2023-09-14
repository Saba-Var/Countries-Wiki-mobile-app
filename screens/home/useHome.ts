import { allCountriesRequest } from '@/services'
import { useQuery } from 'react-query'

const useHome = () => {
  const { data: allCountriesData } = useQuery(
    'allCountries',
    allCountriesRequest,
  )

  return { allCountriesData: allCountriesData?.data }
}

export default useHome
