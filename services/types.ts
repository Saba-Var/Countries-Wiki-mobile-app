import { type AxiosResponse } from 'axios'

export type RequestResponse<T> = Promise<AxiosResponse<T>>
