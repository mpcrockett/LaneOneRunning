
import { Center } from '@chakra-ui/react';
import BackgroundBox from '../components/BackgroundBox'
import OrderBox from '../features/Orders/OrderBox';

function Orders() {
  return (
    <BackgroundBox>
      <Center>
        <OrderBox />
      </Center>
    </BackgroundBox>
  )
}

export default Orders