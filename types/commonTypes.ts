import type { Dispatch, SetStateAction } from 'react'

export interface CountryInfo {
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        common: string
        official: string
      }
    }
  }
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: {
    [key: string]: string
  }
  translations: {
    [key: string]: {
      official: string
      common: string
    }
  }
  latlng: [number, number]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: {
    [key: string]: {
      f: string
      m: string
    }
  }
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  gini: {
    [key: string]: number
  }
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: {
    png: string
    svg: string
    alt: string
  }
  coatOfArms: {
    png: string
    svg: string
  }
  startOfWeek: string
  capitalInfo: {
    latlng: [number, number]
  }
  postalCode: {
    format: string
    regex: string
  }
}

export type Navigate<
  T = {
    [key: string]: string
  },
> = {
  navigate: (screen: string, params?: T) => void
  setOptions: (options: { title: string }) => void
}

export type SetState<T> = Dispatch<SetStateAction<T>>

export type MapNavigationData = {
  longitude: number
  latitude: number
  title: string
}
