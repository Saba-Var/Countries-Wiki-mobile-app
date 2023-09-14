import { getCountryByNameRequest } from '@/services'
import { useForm, useWatch } from 'react-hook-form'
import { useQuery, QueryClient } from 'react-query'

const useSearchCountry = () => {
  const queryClient = new QueryClient()

  const { control } = useForm({
    defaultValues: {
      name: '',
    },
  })

  const countryName = useWatch({
    name: 'name',
    control,
  })

  const { data: countriesData, isLoading } = useQuery(
    ['allCountries', countryName],
    () => getCountryByNameRequest(countryName),
    {
      enabled: !!countryName,
      retry: false,
    },
  )

  const onRefresh = () => queryClient.invalidateQueries('allCountries')

  return {
    countriesData: countriesData?.data,
    onRefresh,
    isLoading,
    control,
  }
}

export default useSearchCountry
