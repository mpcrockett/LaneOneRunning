import { cartItem, updateQuantity } from '../../store/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import CartItemBox from './CartItemBox';

interface Props {
  item: cartItem
}

function CartItem(props: Props) {
  const dispatch = useAppDispatch();

  const handleQuantityChange = (
      valueAsString: string,
      valueAsNumber: number
    ) => {
    dispatch(
      updateQuantity({ item_id: props.item.item_id, quantity: valueAsNumber})
    );
  };
  
  return (
    <CartItemBox item={props.item} handleQuantityChange={handleQuantityChange}/>
  );
}

export default CartItem