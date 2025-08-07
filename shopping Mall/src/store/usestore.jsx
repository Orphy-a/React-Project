import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const useStore = create(
  persist(
    (set, get) => ({
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
      addCart: (newItem) => {
        const { cart } = get();
        const exists = cart.some((item) => item.id === newItem.id);
        if (exists) {
          alert("이미 장바구니에 담긴 상품입니다.");
          return;
        }
        set({ cart: [...cart, newItem] });
      },
      removeCart: (cartItem) =>
        set((state) => ({
          cart: state.cart.filter((c) => c.id !== cartItem.id),
        })),
    }),
    {
      name: "cart",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);

export default useStore;
