import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import { LoaderProps } from './types'

const Loader: React.FC<LoaderProps> = ({
  color = MD2Colors.blue500,
  animating = true,
  size = 'large',
  ...props
}) => {
  return (
    <ActivityIndicator
      animating={animating}
      color={color}
      size={size}
      {...props}
    />
  )
}

export default Loader
