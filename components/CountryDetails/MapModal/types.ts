import type { SetState } from '@/types'

export type MapModalProps = {
  setShow: SetState<boolean>
  longitude: number
  latitude: number
  show: boolean
}
