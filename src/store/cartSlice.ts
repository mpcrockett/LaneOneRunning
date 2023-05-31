import { createSlice } from '@reduxjs/toolkit';

export type cartItem = {
  item_id: number,
  product_id: number,
  name: string,
  brand: string,
  size: string,
  color: string,
  quantity: number
  url: string,
  price: number
}
export interface cartState {
  items: Array<cartItem>,
  addStatus: string | null;
  cartTotal: number;
}

const initialState: cartState = {
  items: [],
  addStatus: null,
  cartTotal: 0,
};

//Cart SLICE 
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.cartTotal = state.cartTotal + Number(action.payload.price);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.item_id !== action.payload);
    },
    updateQuantity: (state, action) => {
      let newItems;
      if(action.payload.quantity === 0) {
        newItems = state.items.filter((item) => item.item_id !== action.payload.item_id);
      } else {
        newItems = state.items.map((item) => {
          if(item.item_id === action.payload.item_id) {
            return {...item, quantity: action.payload.quantity}
          } else {
            return item
          }
        });
      }
      state.items = newItems;
      const newTotal = newItems.reduce((total: number, item: cartItem) => {
        return total + (item.quantity * Number(item.price));
      }, 0);
      state.cartTotal = newTotal;
    },
    clearCart: (state) => {
      state.items = [];
      state.cartTotal = 0;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;


export default cartSlice.reducer;