import React from "react";
import { create } from "zustand";

const initialProducts = [
  {
    id: 1,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
  },
  {
    id: 2,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
  },
  {
    id: 3,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
  },
];

const usestore = create((set) => ({
  //상품
  products: initialProducts,
  setProducts: (products) => set({ products }),
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  removeProduct: (product) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== product.id),
    })),

  cart: [],
  setCart: (cart) => set({ cart }),
  addCart: (cart) => set((state) => ({ cart: [...state.cart, cart] })),
  removeCart: (cart) =>
    set((state) => ({
      cart: state.cart.filter((c) => c.id !== cart.id),
    })),
}));

export default usestore;
