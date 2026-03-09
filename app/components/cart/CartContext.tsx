"use client";

import { CartProduct } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  cartItems: CartProduct[];
  cartTotalQty: number;
  cartTotalAmount: number;
  addToCart: (product: CartProduct) => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
};

const CartContext = createContext<CartContextType | null>(null);
const CART_STORAGE_KEY = "eshop-cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch {
        window.localStorage.removeItem(CART_STORAGE_KEY);
      }
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems, isHydrated]);

  const addToCart = (product: CartProduct) => {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find((item) => item.id === product.id);

      if (!existingProduct) {
        return [...currentItems, product];
      }

      return currentItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + product.quantity,
              selectedImage: product.selectedImage,
            }
          : item
      );
    });
  };

  const increaseQty = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId: string) => {
    return cartItems.some((item) => item.id === productId);
  };

  const cartTotalQty = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotalQty,
        cartTotalAmount,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
};
