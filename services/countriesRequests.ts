import type { RequestResponse } from './types'
import type { CountryInfo } from 'types'
import axios from './axios'

export const allCountriesRequest = async (): RequestResponse<CountryInfo[]> => {
  return await axios.get('/all')
}
