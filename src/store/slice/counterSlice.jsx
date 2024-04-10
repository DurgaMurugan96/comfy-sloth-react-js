import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cart_count: 0,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartIncrement: (state, { payload }) => {
      state.cart_count += payload?.value
    },
    setCartDecrement: (state, { payload }) => {
      state.cart_count -= payload.value
    },
    // setCartIncrement: (state) => {
    //   state.cart_count += 1
    // },
    setCartDelete: (state) => {
      state.cart_count = 0;
    },
  },
})

export const { setCartIncrement, setCartDecrement, setCartDelete } = cartSlice.actions

export default cartSlice.reducer







