import { allCountriesRequest } from '@/services'
import { useQuery } from 'react-query'

const useHome = () => {
  const { data } = useQuery('allCountries', allCountriesRequest)

  return {}
}

export default useHome
