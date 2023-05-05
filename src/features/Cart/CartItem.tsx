import CartItemBox from './CartItemBox';

const sampleItem = {
  name: "Saucony Kinvara 14",
  size: '12',
  color: 'black',
  quantity: 2,
  image: 'https://s7d4.scene7.com/is/image/WolverineWorldWide/S20823-25_1?wid=826&hei=685&resMode=bilin&op_usm=0.5,1.0,8,0&iccEmbed=0&printRes=72'
};

function CartItem() {
  return (
    <CartItemBox item={sampleItem} />
  );
}

export default CartItem