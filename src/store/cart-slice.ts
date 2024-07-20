/** @format */

import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartSlice {
  items: CartItem[];
}

const initialState: CartSlice = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
  },
});
