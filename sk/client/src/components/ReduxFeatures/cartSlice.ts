import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Imobile } from "../AllProducts/mobileTypes";

interface InitialState {
  cart: Imobile[];
  totalCartItems: number;
  totalCartAmount: number;
}

const initialState: InitialState = {
  cart: [],
  totalCartItems: 0,
  totalCartAmount: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Imobile>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
        state.totalCartItems += 1;
        state.totalCartAmount += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      state.totalCartAmount -=
        state.cart[itemIndex].price * state.cart[itemIndex].cartQuantity;
      state.cart.splice(itemIndex, 1);
      state.totalCartItems -= 1;
    },
    incrementItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      state.cart[itemIndex].cartQuantity += 1;
      state.totalCartAmount += state.cart[itemIndex].price;
    },
    decrementItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      state.cart[itemIndex].cartQuantity -= 1;
      state.totalCartAmount -= state.cart[itemIndex].price;
    },
    resetCart: (state) => {
      state.totalCartAmount = 0;
      state.totalCartItems = 0;
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementItem,
  decrementItem,
  resetCart,
} = CartSlice.actions;
export default CartSlice.reducer;
