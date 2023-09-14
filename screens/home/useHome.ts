import { useQuery, useQueryClient } from 'react-query'
import { allCountriesRequest } from '@/services'

const useHome = () => {
  const queryClient = useQueryClient()

  const { data: allCountriesData, isLoading } = useQuery(
    'allCountries',
    allCountriesRequest,
  )

  const onRefresh = () => queryClient.invalidateQueries('allCountries')

  return { allCountriesData: allCountriesData?.data, isLoading, onRefresh }
}

export default useHome
